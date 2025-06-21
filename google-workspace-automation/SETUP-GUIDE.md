# PSYT.AI Beta Survey Automation - Complete Setup Guide

## 🎯 Overview

This system automatically sends a thoughtful 10-question survey to every new beta signup and scores their responses to identify the best candidates for early access.

**What it does:**
1. **Monitors** Formspree submissions via Gmail
2. **Sends** personalized survey emails automatically 
3. **Scores** responses using qualitative analysis
4. **Notifies** your team of high-value candidates (7+ points)
5. **Tracks** everything in Google Sheets for easy management

---

## 📋 Prerequisites

- Google Workspace account (Gmail, Forms, Sheets, Apps Script)
- Access to info@psyt.ai Gmail account
- Current Formspree setup (endpoint: xanjdbke)

---

## 🚀 Step-by-Step Setup

### Step 1: Create the Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Create a new form"
3. **Title:** "Tell us about your journey"
4. **Description:** "We're building something thoughtful—mental wellness tools that actually fit into real life. These questions help us understand what you're looking for and how we can make this beta experience meaningful for you. Takes about 5 minutes."

**Add these 10 questions exactly:**

1. **What brings you here?** (Paragraph, Required)
   - Helper text: "A sentence or two about what drew you to this project is more than enough."

2. **What's something you're hoping to feel more of—or less of—in your daily life?** (Paragraph, Required)  
   - Helper text: "Examples: clarity, calm, connection, energy, purpose, focus, etc."

3. **In your own words, what's a small challenge or friction point you'd love to see softened?** (Paragraph, Required)
   - Helper text: "This could be about work, family, emotions, or just the rhythm of your days."

4. **When you think about "well-being," what does that look like for you?** (Paragraph, Required)
   - Helper text: "There's no right answer—describe a moment, a feeling, or even an image."

5. **Is there a tool, habit, or practice you've tried that's helped you? What made it work—or not?** (Paragraph, Optional)
   - Helper text: "Anything counts, from journaling to walking to a favorite app."

6. **How do you prefer to give feedback?** (Multiple Choice, Required)
   - A quick note when something jumps out at me
   - Occasional check-ins  
   - I'd rather just use the thing and not be bothered

7. **If you could wave a magic wand and change one thing about your day-to-day, what would it be?** (Paragraph, Required)

8. **Anything you wish people building tools for well-being understood about real life?** (Paragraph, Optional)
   - Helper text: "Your honest take is gold."

9. **Is there anything else you'd like to share, or a question you wish we'd asked?** (Paragraph, Optional)
   - Helper text: "Optional"

10. **Your best email for updates and (if you want) an early invite:** (Email, Required)
    - Helper text: "This should match the email you used to sign up for the beta waitlist."

**Form Settings:**
- ✅ Collect email addresses
- ✅ Limit to 1 response
- ✅ Allow response editing
- ✅ Show progress bar
- **Confirmation message:** "Thank you for sharing your thoughts with us. We'll review your responses thoughtfully and be in touch within 2-3 business days. Your insights help us build tools that actually support real life."

5. **Save the Form ID** from the URL: `https://forms.google.com/d/[FORM_ID]/edit`

### Step 2: Create the Tracking Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create new sheet: "PSYT Beta Survey Tracking"
3. Set up headers in row 1:
   - A1: Email
   - B1: Signup Date  
   - C1: Survey Sent
   - D1: Survey Completed
   - E1: Beta Score
   - F1: Priority Level

4. **Save the Sheet ID** from the URL: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`

### Step 3: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `beta-survey-automation.js`
4. **Update CONFIG section** with your IDs:
   ```javascript
   const CONFIG = {
     SURVEY_FORM_ID: 'YOUR_FORM_ID_HERE',
     TRACKING_SHEET_ID: 'YOUR_SHEET_ID_HERE',
     GMAIL_LABEL: 'psyt-beta-signups',
     FROM_EMAIL: 'info@psyt.ai',
     COMPANY_NAME: 'PSYT.AI',
     PRODUCT_NAME: 'The Brain'
   };
   ```
5. Save the project as "PSYT Beta Automation"

### Step 4: Connect Form to Sheet

1. In your Google Form, click "Responses" tab
2. Click the green Sheets icon
3. Choose "Create a new spreadsheet" (or select existing)
4. This creates the response collection sheet (different from tracking sheet)

### Step 5: Set Up Form Submission Trigger

1. In the **Form Response Sheet**, go to Extensions > Apps Script
2. Add this trigger function:
   ```javascript
   function createFormTrigger() {
     ScriptApp.newTrigger('processSurveyResponse')
       .forForm(FormApp.openById('YOUR_FORM_ID'))
       .onFormSubmit()
       .create();
   }
   ```
3. Run `createFormTrigger()` once to set it up

### Step 6: Configure Gmail Filters

1. In Gmail, create a new filter:
   - **From:** noreply@formspree.io
   - **Subject:** New submission from your form
2. **Actions:**
   - Apply label: `psyt-beta-signups` 
   - Never send to Spam
   - Mark as important

### Step 7: Run Initial Setup

1. In your Apps Script project, run the `setupBetaAutomation()` function
2. Authorize all required permissions
3. This will:
   - Create the Gmail label
   - Set up automatic triggers
   - Verify basic functionality

### Step 8: Test the System

1. Run `testBetaSystem()` to verify configuration
2. Submit a test to your Formspree endpoint
3. Check that:
   - Email gets labeled correctly
   - Survey email is sent
   - Response is logged in tracking sheet

---

## 🎯 How the Scoring Works

The system evaluates candidates based on **qualitative indicators** rather than simple metrics:

### Scoring Criteria (0-10 points total):

**Depth of Reflection (0-2 points):**
- Detailed, thoughtful responses
- Personal examples and situations
- Shows self-awareness

**Alignment with Product Vision (0-2 points):**
- Mentions family, work, daily life challenges
- Values simplicity over flashy features
- Understands well-being is personal

**Feedback Quality Potential (0-2 points):**
- Chooses engaged feedback style
- Provides honest, constructive insights
- Understands real-world constraints

**Problem Clarity (0-2 points):**
- Can articulate specific friction points
- Recognizes gaps in current tools
- Understands small changes = big impact

**Authenticity & Honesty (0-2 points):**
- Vulnerable, genuine responses
- Admits when things haven't worked
- Realistic about what they're looking for

### Automatic Actions:

- **7+ points:** High-priority candidates (team notification)
- **4-6 points:** Good general beta candidates
- **0-3 points:** Lower priority for early beta

---

## 📧 Email Templates

The system sends beautifully designed HTML emails with:
- PSYT.AI branding (your gradient colors)
- Mobile-responsive design
- Clear call-to-action
- Personal, thoughtful tone
- Plain text fallback

---

## 📊 Monitoring & Management

### In Google Sheets, you can:
- See all signups and their scores
- Filter high-value candidates
- Track survey completion rates
- Export data for analysis

### Automatic Notifications:
- High-value candidates (7+ points) trigger immediate team emails
- System errors are reported automatically
- All activity is logged for transparency

---

## 🔧 Customization Options

### Adjust Scoring Algorithm:
Edit the `calculateBetaScore()` function to change:
- Keyword weights
- Score thresholds  
- Evaluation criteria

### Modify Email Templates:
Update `createSurveyEmailHTML()` and `createSurveyEmailPlain()` for:
- Branding changes
- Message tone
- Call-to-action text

### Change Timing:
Modify triggers in `setupTriggers()` to:
- Check emails more/less frequently
- Add delays between survey sends
- Schedule specific send times

---

## 🚨 Troubleshooting

### Common Issues:

**Surveys not sending:**
- Check Gmail label setup
- Verify Formspree email format
- Review Apps Script permissions

**Scoring not working:**
- Ensure form submission trigger is active
- Check response sheet structure
- Verify form field mapping

**Missing notifications:**
- Check email permissions in Apps Script
- Verify notification email addresses
- Review spam folders

### Debug Functions:
- `testBetaSystem()` - Basic functionality test
- `processBetaSignups()` - Manual signup processing
- Console logs show detailed activity

---

## 🔒 Security & Privacy

- All data stays within your Google Workspace
- No external services or APIs required
- Survey responses are private and secure
- Email addresses are handled confidentially
- Scoring is done locally in Apps Script

---

## 📈 Analytics & Insights

Track these key metrics in your sheet:
- **Conversion rate:** % of signups who complete survey
- **Score distribution:** Average scores and ranges
- **Response quality:** Length and depth indicators
- **Feedback preferences:** How people want to engage
- **Common themes:** Patterns in friction points and goals

This data helps you:
- Improve the survey questions over time
- Better understand your target audience
- Refine your product development priorities
- Identify the most engaged beta candidates

---

## 🎉 You're All Set!

Once configured, this system runs automatically and gives you:
- **High-quality beta candidates** identified through thoughtful responses
- **Automated workflow** that saves hours of manual work
- **Rich insights** about your users' real needs and challenges
- **Scalable process** that grows with your waitlist

The thoughtful, human-centered approach aligns perfectly with PSYT.AI's vision of wellness tools that actually fit into real life.

**Questions?** Check the troubleshooting section or review the detailed code comments in the Apps Script.
