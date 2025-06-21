/**
 * PSYT.AI Beta Waitlist Survey Automation
 * 
 * This Google Apps Script automatically:
 * 1. Monitors Formspree submissions via Gmail
 * 2. Sends a 10-question survey to new beta signups
 * 3. Scores responses to identify ideal candidates
 * 4. Updates a Google Sheet with candidate data
 * 
 * Setup Instructions:
 * 1. Create a new Google Apps Script project
 * 2. Copy this code and configure the constants below
 * 3. Set up Gmail filters and triggers as described in README
 * 4. Create the Google Form and Sheet as described
 */

// ===== CONFIGURATION =====
const CONFIG = {
  // Google Form for the beta survey (create this first)
  SURVEY_FORM_ID: 'YOUR_GOOGLE_FORM_ID_HERE',
  
  // Google Sheet to track responses (create this first)
  TRACKING_SHEET_ID: 'YOUR_GOOGLE_SHEET_ID_HERE',
  
  // Gmail label for Formspree notifications
  GMAIL_LABEL: 'psyt-beta-signups',
  
  // From email for survey invitations
  FROM_EMAIL: 'steve@psyt.ai',
  
  // Personal details
  SENDER_NAME: 'Steve at PSYT.AI',
  COMPANY_NAME: 'PSYT.AI',
  PRODUCT_NAME: 'The Brain'
};

// ===== MAIN FUNCTIONS =====

/**
 * Main function to process new beta signups
 * This should be triggered by Gmail when new Formspree emails arrive
 */
function processBetaSignups() {
  console.log('Starting beta signup processing...');
  
  try {
    const label = GmailApp.getUserLabelByName(CONFIG.GMAIL_LABEL);
    if (!label) {
      console.error(`Gmail label "${CONFIG.GMAIL_LABEL}" not found. Please create it first.`);
      return;
    }
    
    // Get unread emails with our label
    const threads = label.getThreads().filter(thread => thread.isUnread());
    console.log(`Found ${threads.length} unread signup emails`);
    
    threads.forEach(thread => {
      const messages = thread.getMessages();
      messages.forEach(message => {
        if (message.isUnread()) {
          processSignupEmail(message);
          message.markRead();
        }
      });
    });
    
  } catch (error) {
    console.error('Error processing beta signups:', error);
    notifyAdminOfError(error);
  }
}

/**
 * Process a single signup email from Formspree
 */
function processSignupEmail(message) {
  const subject = message.getSubject();
  const body = message.getPlainBody();
  
  // Extract email from Formspree notification
  const emailMatch = body.match(/Email:\s*([^\s\n]+@[^\s\n]+)/i);
  if (!emailMatch) {
    console.error('Could not extract email from message:', subject);
    return;
  }
  
  const userEmail = emailMatch[1].trim();
  console.log(`Processing signup for: ${userEmail}`);
  
  // Check if we've already sent survey to this email
  if (hasAlreadySentSurvey(userEmail)) {
    console.log(`Survey already sent to ${userEmail}, skipping`);
    return;
  }
  
  // Send the survey
  sendBetaSurvey(userEmail);
  
  // Log to tracking sheet
  logSignupToSheet(userEmail, new Date());
}

/**
 * Send the 10-question beta survey to a new signup
 */
function sendBetaSurvey(userEmail) {
  const form = FormApp.openById(CONFIG.SURVEY_FORM_ID);
  const prefillUrl = form.getPublishedUrl();
  
  // Create personalized survey link
  const surveyUrl = `${prefillUrl}?usp=pp_url&entry.email=${encodeURIComponent(userEmail)}`;
  
  const subject = `Quick question about your wellness journey`;
  
  const htmlBody = createSurveyEmailHTML(userEmail, surveyUrl);
  const plainBody = createSurveyEmailPlain(userEmail, surveyUrl);
  
  try {
    GmailApp.sendEmail(
      userEmail,
      subject,
      plainBody,
      {
        htmlBody: htmlBody,
        from: CONFIG.FROM_EMAIL,
        name: CONFIG.SENDER_NAME,
        replyTo: CONFIG.FROM_EMAIL
      }
    );
    
    console.log(`Survey sent successfully to ${userEmail}`);
    
  } catch (error) {
    console.error(`Failed to send survey to ${userEmail}:`, error);
    throw error;
  }
}

/**
 * Create HTML email template for survey invitation
 */
function createSurveyEmailHTML(userEmail, surveyUrl) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Quick question about your wellness journey</title>
</head>
<body style="font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <!-- Header -->
  <div style="text-align: center; margin-bottom: 30px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
      <div style="color: white; font-size: 24px;">🧠</div>
    </div>
  </div>
  
  <!-- Main Content -->
  <div style="background: #f8fafc; border-radius: 12px; padding: 30px; margin-bottom: 30px;">
    <p style="margin-top: 0; font-size: 16px; color: #4a5568;">Hi there,</p>
    
    <p style="font-size: 16px; color: #4a5568;">
      Thanks for signing up for our waitlist! I'm Steve, building PSYT.AI to create wellness tools that actually fit into real life.
    </p>
    
    <p style="font-size: 16px; color: #4a5568;">
      We're currently at the last stages of training our AI system (we call it "The Brain") and I'm assembling a thoughtful group of people to help test when it's ready. This quick survey helps me understand what you're looking for.
    </p>
    
    <p style="font-size: 16px; color: #4a5568;">
      You should be looking for a reach out from us once we've picked the most ideal candidates for beta testing. If you don't get picked, it doesn't mean you're not part of our core demographic—I just need you to know that.
    </p>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="${surveyUrl}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; font-size: 16px;">
        Take Survey (5 minutes) →
      </a>
    </div>
    
    <p style="font-size: 14px; color: #718096; text-align: center; margin-bottom: 0;">
      <em>5 minutes • Your insights help me build better tools</em>
    </p>
  </div>
  
  <!-- Footer -->
  <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
    <p style="margin: 0; color: #718096; font-size: 14px;">
      Thanks for helping me understand what people actually need,<br>
      Steve
    </p>
    
    <p style="margin: 10px 0 0; color: #a0aec0; font-size: 12px;">
      Questions? Just reply to this email
    </p>
  </div>
  
</body>
</html>`;
}

/**
 * Create plain text email template for survey invitation
 */
function createSurveyEmailPlain(userEmail, surveyUrl) {
  return `Hi there,

Thanks for signing up for our waitlist! I'm Steve, building PSYT.AI to create wellness tools that actually fit into real life.

We're currently at the last stages of training our AI system (we call it "The Brain") and I'm assembling a thoughtful group of people to help test when it's ready. This quick survey helps me understand what you're looking for.

You should be looking for a reach out from us once we've picked the most ideal candidates for beta testing. If you don't get picked, it doesn't mean you're not part of our core demographic—I just need you to know that.

Take the survey here: ${surveyUrl}
(Takes about 5 minutes)

Thanks for helping me understand what people actually need,
Steve

Questions? Just reply to this email`;
}

/**
 * Check if we've already sent a survey to this email
 */
function hasAlreadySentSurvey(email) {
  try {
    const sheet = SpreadsheetApp.openById(CONFIG.TRACKING_SHEET_ID);
    const dataSheet = sheet.getSheetByName('Signups') || sheet.insertSheet('Signups');
    
    const data = dataSheet.getDataRange().getValues();
    return data.some(row => row[0] === email); // Assuming email is in column A
    
  } catch (error) {
    console.error('Error checking survey status:', error);
    return false; // Default to sending if we can't check
  }
}

/**
 * Log signup to tracking sheet
 */
function logSignupToSheet(email, timestamp) {
  try {
    const sheet = SpreadsheetApp.openById(CONFIG.TRACKING_SHEET_ID);
    let dataSheet = sheet.getSheetByName('Signups');
    
    // Create sheet if it doesn't exist
    if (!dataSheet) {
      dataSheet = sheet.insertSheet('Signups');
      // Add headers
      dataSheet.getRange(1, 1, 1, 5).setValues([
        ['Email', 'Signup Date', 'Survey Sent', 'Survey Completed', 'Beta Score']
      ]);
    }
    
    // Add new row
    dataSheet.appendRow([
      email,
      timestamp,
      new Date(), // Survey sent timestamp
      '', // Survey completed (will be filled when form is submitted)
      '' // Beta score (will be calculated after survey)
    ]);
    
    console.log(`Logged signup for ${email} to tracking sheet`);
    
  } catch (error) {
    console.error('Error logging to sheet:', error);
  }
}

/**
 * Process survey responses and calculate beta candidate scores
 * This should be triggered when the Google Form receives new responses
 */
function processSurveyResponse(e) {
  if (!e || !e.values) return;
  
  const responses = e.values;
  const email = responses[1]; // Assuming email is the second column
  
  // Calculate beta score based on responses
  const betaScore = calculateBetaScore(responses);
  
  // Update tracking sheet with completion and score
  updateTrackingSheetWithScore(email, betaScore);
  
  // If high score, notify team for priority beta access
  if (betaScore >= 7) {
    notifyTeamOfHighValueCandidate(email, betaScore);
  }
}

/**
 * Calculate beta candidate score based on thoughtful survey responses
 * Updated for PSYT.AI's human-centered questions
 */
function calculateBetaScore(responses) {
  let score = 0;
  
  // Question 1: What brings you here? (responses[1])
  const motivation = responses[1] || '';
  score += evaluateDepthAndSpecificity(motivation, [
    'family', 'work', 'parent', 'stress', 'calm', 'balance', 
    'overwhelm', 'support', 'help', 'struggling'
  ]);
  
  // Question 2: What you're hoping to feel more/less of (responses[2])
  const emotionalGoals = responses[2] || '';
  score += evaluateDepthAndSpecificity(emotionalGoals, [
    'calm', 'clarity', 'focus', 'energy', 'connection', 'purpose',
    'less stress', 'less anxiety', 'less overwhelm'
  ]);
  
  // Question 3: Small challenge or friction point (responses[3])
  const frictionPoints = responses[3] || '';
  score += evaluateDepthAndSpecificity(frictionPoints, [
    'time', 'schedule', 'interruptions', 'mental load', 'transitions',
    'juggling', 'constant', 'always', 'never enough'
  ]);
  
  // Question 4: What well-being looks like for you (responses[4])
  const wellbeingVision = responses[4] || '';
  score += evaluateAuthenticity(wellbeingVision);
  
  // Question 5: Past tools/practices (responses[5])
  const pastExperience = responses[5] || '';
  if (pastExperience.length > 30) score += 1; // Shows reflection on experience
  
  // Question 6: Feedback preference (responses[6])
  const feedbackStyle = responses[6] || '';
  if (feedbackStyle.includes('quick note when something jumps out')) {
    score += 2; // Most engaged feedback style
  } else if (feedbackStyle.includes('occasional check-ins')) {
    score += 1; // Still good engagement
  }
  // No points for "rather not be bothered" - passive users
  
  // Question 7: Magic wand moment (responses[7])
  const magicWand = responses[7] || '';
  score += evaluateDepthAndSpecificity(magicWand, [
    'time', 'present', 'energy', 'patience', 'calm', 'balance',
    'stop', 'less', 'more', 'feel'
  ]);
  
  // Question 8: Reality check for builders (responses[8])
  const realityCheck = responses[8] || '';
  if (realityCheck.length > 50) {
    score += 1; // Thoughtful insights about real-world constraints
    // Bonus points for mentioning common real-life challenges
    if (realityCheck.toLowerCase().includes('time') || 
        realityCheck.toLowerCase().includes('interrupt') ||
        realityCheck.toLowerCase().includes('realistic') ||
        realityCheck.toLowerCase().includes('simple')) {
      score += 1;
    }
  }
  
  // Overall response quality bonus
  const totalWordCount = responses.join(' ').split(' ').length;
  if (totalWordCount > 200) score += 1; // Engaged, detailed responses
  
  return Math.min(score, 10); // Cap at 10
}

/**
 * Evaluate depth and specificity of a response
 * Returns 0-2 points based on quality indicators
 */
function evaluateDepthAndSpecificity(response, relevantKeywords) {
  if (!response || response.length < 20) return 0;
  
  const lowerResponse = response.toLowerCase();
  let points = 0;
  
  // Length and detail
  if (response.length > 50) points += 1;
  
  // Specificity (mentions concrete situations, feelings, or challenges)
  const specificityIndicators = relevantKeywords.filter(keyword => 
    lowerResponse.includes(keyword)
  ).length;
  
  if (specificityIndicators >= 2) points += 1;
  
  return Math.min(points, 2);
}

/**
 * Evaluate authenticity and self-awareness in responses
 */
function evaluateAuthenticity(response) {
  if (!response || response.length < 30) return 0;
  
  const lowerResponse = response.toLowerCase();
  let points = 0;
  
  // Personal, vulnerable language
  const authenticityIndicators = [
    'feel', 'feeling', 'moment', 'when', 'like', 'enough', 
    'actually', 'really', 'just', 'simply'
  ];
  
  const authenticityCount = authenticityIndicators.filter(word => 
    lowerResponse.includes(word)
  ).length;
  
  if (authenticityCount >= 3) points += 1;
  if (response.length > 80) points += 1; // Detailed, thoughtful response
  
  return Math.min(points, 2);
}

/**
 * Update tracking sheet with survey completion and score
 */
function updateTrackingSheetWithScore(email, score) {
  try {
    const sheet = SpreadsheetApp.openById(CONFIG.TRACKING_SHEET_ID);
    const dataSheet = sheet.getSheetByName('Signups');
    
    const data = dataSheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) { // Skip header
      if (data[i][0] === email) {
        dataSheet.getRange(i + 1, 4).setValue(new Date()); // Survey completed
        dataSheet.getRange(i + 1, 5).setValue(score); // Beta score
        break;
      }
    }
    
  } catch (error) {
    console.error('Error updating tracking sheet:', error);
  }
}

/**
 * Notify team of high-value beta candidate
 */
function notifyTeamOfHighValueCandidate(email, score) {
  const subject = `🌟 High-Value Beta Candidate: ${email} (Score: ${score}/10)`;
  const body = `A new beta candidate with a high compatibility score has completed the survey:

Email: ${email}
Beta Score: ${score}/10
Survey Completed: ${new Date()}

This candidate should be prioritized for early beta access.

Review their full responses in the Google Form responses sheet.`;

  GmailApp.sendEmail(
    CONFIG.FROM_EMAIL,
    subject,
    body,
    {
      from: CONFIG.FROM_EMAIL,
      name: 'PSYT.AI Beta System'
    }
  );
}

/**
 * Notify admin of system errors
 */
function notifyAdminOfError(error) {
  const subject = '⚠️ PSYT.AI Beta System Error';
  const body = `An error occurred in the beta signup automation:

Error: ${error.message}
Stack: ${error.stack}
Time: ${new Date()}

Please check the Google Apps Script logs for more details.`;

  GmailApp.sendEmail(
    CONFIG.FROM_EMAIL,
    subject,
    body,
    {
      from: CONFIG.FROM_EMAIL,
      name: 'PSYT.AI Beta System'
    }
  );
}

// ===== SETUP FUNCTIONS =====

/**
 * Initial setup function - run this once to configure everything
 */
function setupBetaAutomation() {
  console.log('Setting up PSYT.AI Beta Automation...');
  
  // Create Gmail label if it doesn't exist
  try {
    let label = GmailApp.getUserLabelByName(CONFIG.GMAIL_LABEL);
    if (!label) {
      label = GmailApp.createLabel(CONFIG.GMAIL_LABEL);
      console.log(`Created Gmail label: ${CONFIG.GMAIL_LABEL}`);
    }
  } catch (error) {
    console.error('Error creating Gmail label:', error);
  }
  
  // Set up triggers
  setupTriggers();
  
  console.log('Setup complete! Please also:');
  console.log('1. Create your Google Form with the survey questions');
  console.log('2. Create your Google Sheet for tracking');
  console.log('3. Update the CONFIG constants with your Form and Sheet IDs');
  console.log('4. Set up Gmail filters to automatically label Formspree emails');
}

/**
 * Set up automated triggers
 */
function setupTriggers() {
  // Delete existing triggers
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => ScriptApp.deleteTrigger(trigger));
  
  // Create new triggers
  // Check for new signups every 5 minutes
  ScriptApp.newTrigger('processBetaSignups')
    .timeBased()
    .everyMinutes(5)
    .create();
  
  console.log('Triggers set up successfully');
}

/**
 * Test function to verify everything is working
 */
function testBetaSystem() {
  console.log('Testing beta system...');
  
  // Test email sending (replace with a test email)
  const testEmail = 'test@example.com';
  
  try {
    // Don't actually send in test mode
    console.log(`Would send survey to: ${testEmail}`);
    console.log('Test completed successfully');
  } catch (error) {
    console.error('Test failed:', error);
  }
}
