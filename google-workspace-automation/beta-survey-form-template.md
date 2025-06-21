# PSYT.AI Beta Survey - Google Form Template

## Form Title: "Tell us about your journey"

## Form Description:
"We're building something thoughtful—mental wellness tools that actually fit into real life. These questions help us understand what you're looking for and how we can make this beta experience meaningful for you. Takes about 5 minutes."

---

## 10 Thoughtful Survey Questions

### 1. What brings you here? (Paragraph - Required)
**Question:** What brings you here?
**Helper Text:** A sentence or two about what drew you to this project is more than enough.

### 2. Emotional Goals (Paragraph - Required)
**Question:** What's something you're hoping to feel more of—or less of—in your daily life?
**Helper Text:** Examples: clarity, calm, connection, energy, purpose, focus, etc.

### 3. Daily Friction Points (Paragraph - Required)
**Question:** In your own words, what's a small challenge or friction point you'd love to see softened?
**Helper Text:** This could be about work, family, emotions, or just the rhythm of your days.

### 4. Personal Well-being Vision (Paragraph - Required)
**Question:** When you think about "well-being," what does that look like for you?
**Helper Text:** There's no right answer—describe a moment, a feeling, or even an image.

### 5. Past Tools & Practices (Paragraph - Optional)
**Question:** Is there a tool, habit, or practice you've tried that's helped you? What made it work—or not?
**Helper Text:** Anything counts, from journaling to walking to a favorite app.

### 6. Feedback Preference (Multiple Choice - Required)
**Question:** How do you prefer to give feedback?

Options:
- A quick note when something jumps out at me
- Occasional check-ins
- I'd rather just use the thing and not be bothered

### 7. Magic Wand Moment (Paragraph - Required)
**Question:** If you could wave a magic wand and change one thing about your day-to-day, what would it be?

### 8. Reality Check for Builders (Paragraph - Optional)
**Question:** Anything you wish people building tools for well-being understood about real life?
**Helper Text:** Your honest take is gold.

### 9. Open Reflection (Paragraph - Optional)
**Question:** Is there anything else you'd like to share, or a question you wish we'd asked?
**Helper Text:** Optional

### 10. Contact Email (Email - Required)
**Question:** Your best email for updates and (if you want) an early invite:
**Helper Text:** This should match the email you used to sign up for the beta waitlist.

---

## Form Settings

### General Settings:
- **Collect email addresses:** Yes
- **Restrict to users in your organization:** No
- **Limit to 1 response:** Yes
- **Allow response editing:** Yes
- **Show progress bar:** Yes

### Presentation:
- **Theme:** Clean, minimal design with PSYT.AI brand colors
- **Confirmation message:** "Thank you for sharing your thoughts with us. We'll review your responses thoughtfully and be in touch within 2-3 business days. Your insights help us build tools that actually support real life."

---

## After Creating the Form

### 1. Get the Form ID
- The Form ID is in the URL: `https://forms.google.com/d/[FORM_ID]/edit`
- Copy this ID to use in the Google Apps Script CONFIG

### 2. Set Up Response Destination
- In Form settings, choose "Select response destination"
- Create a new Google Sheet named "PSYT Beta Survey Responses"
- This sheet will collect all survey responses

### 3. Configure Form Triggers
- In the Google Sheet, go to Extensions > Apps Script
- Set up a form submission trigger that calls `processSurveyResponse(e)`

### 4. Pre-fill Testing
- Test the pre-fill URL format: `FORM_URL?usp=pp_url&entry.ENTRY_ID=EMAIL`
- Find the correct entry ID for the email field by inspecting the form HTML

---

## Updated Scoring Algorithm

The automated scoring system evaluates candidates based on thoughtful, qualitative responses:

### Qualitative Indicators (High-Value Candidates):

**Depth of Reflection** (0-2 points):
- Detailed, thoughtful responses to open-ended questions
- Personal examples and specific situations mentioned
- Shows self-awareness and introspection

**Alignment with Product Vision** (0-2 points):
- Mentions family, work, or daily life integration challenges
- Values simplicity and authenticity over flashy features
- Understanding that well-being is personal and contextual

**Feedback Quality Potential** (0-2 points):
- Chooses "quick note when something jumps out" (shows engagement)
- Provides honest, constructive insights in responses
- Demonstrates understanding of real-world constraints

**Problem Clarity** (0-2 points):
- Can articulate specific friction points clearly
- Recognizes gaps in current wellness tools
- Shows understanding that small changes can have big impacts

**Authenticity & Honesty** (0-2 points):
- Vulnerable, genuine responses
- Admits when things haven't worked
- Realistic about what they're looking for

### Scoring Criteria:

- **Response Length**: Longer, more detailed answers indicate higher engagement
- **Specificity**: Concrete examples vs. generic statements
- **Self-Awareness**: Understanding of personal needs and patterns
- **Tool Experience**: Previous attempts at wellness tools (both successes and failures)
- **Feedback Style**: Preference for engaged feedback vs. passive usage
- **Real-Life Focus**: Mentions of daily life integration challenges

**Total Score Range:** 0-10 points
**High-Priority Threshold:** 7+ points (automatic team notification)
**Medium-Priority:** 4-6 points (good candidates for general beta)
**Lower Priority:** 0-3 points (may not be ideal for early beta feedback)

---

## Sample High-Quality Response Indicators:

- **Question 1:** "I'm a working parent struggling to find moments of calm between meetings and bedtime routines..."
- **Question 3:** "The constant mental load of remembering everyone's schedules while trying to stay present..."
- **Question 4:** "Well-being feels like having enough energy at the end of the day to actually enjoy my family instead of just surviving..."
- **Question 7:** "I'd love to stop feeling like I'm always catching up and never quite where I want to be..."
- **Question 8:** "Most wellness apps assume I have 20 minutes of uninterrupted time, which is laughable with a toddler..."

These responses show depth, specificity, and alignment with your product vision of wellness that fits into real life.
