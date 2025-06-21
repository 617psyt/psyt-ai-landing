# PSYT.AI Beta Survey Automation - Quick Reference

## 🎯 System Overview
**Automatically sends 10-question survey to beta signups → Scores responses → Identifies best candidates**

---

## 📋 Setup Checklist

### ✅ Google Form Setup
- [ ] Create form: "Tell us about your journey"
- [ ] Add 10 thoughtful questions (see SETUP-GUIDE.md)
- [ ] Configure settings (1 response, email collection)
- [ ] Save Form ID from URL

### ✅ Google Sheets Setup  
- [ ] Create "PSYT Beta Survey Tracking" sheet
- [ ] Add headers: Email, Signup Date, Survey Sent, Survey Completed, Beta Score
- [ ] Save Sheet ID from URL

### ✅ Google Apps Script Setup
- [ ] Create new Apps Script project
- [ ] Copy code from `beta-survey-automation.js`
- [ ] Update CONFIG with your Form/Sheet IDs
- [ ] Run `setupBetaAutomation()` function

### ✅ Gmail Integration
- [ ] Create filter for noreply@formspree.io emails
- [ ] Apply label: `psyt-beta-signups`
- [ ] Test with sample Formspree submission

---

## 🔄 How It Works

1. **Someone signs up** → Formspree sends notification email
2. **Gmail filter** → Email gets labeled `psyt-beta-signups`  
3. **Apps Script trigger** → Detects new labeled email every 5 minutes
4. **Survey sent** → Personalized email with thoughtful questions
5. **User completes** → Form submission triggers scoring
6. **High scores** → Team gets notified for priority beta access

---

## 🎯 Scoring System (0-10 points)

### High-Priority Indicators:
- **Depth & Specificity** - Detailed personal responses
- **Product Alignment** - Family/work integration focus  
- **Feedback Engagement** - Chooses "quick notes when something jumps out"
- **Problem Clarity** - Can articulate specific friction points
- **Authenticity** - Vulnerable, honest responses

### Automatic Actions:
- **7+ points**: High-priority (immediate team notification)
- **4-6 points**: Good general beta candidates
- **0-3 points**: Lower priority

---

## 📧 Key URLs & IDs

```
Form URL: https://forms.google.com/d/[YOUR_FORM_ID]/edit
Sheet URL: https://docs.google.com/spreadsheets/d/[YOUR_SHEET_ID]/edit
Apps Script: https://script.google.com/
```

**Update these in CONFIG:**
```javascript
SURVEY_FORM_ID: 'YOUR_FORM_ID_HERE'
TRACKING_SHEET_ID: 'YOUR_SHEET_ID_HERE'
```

---

## 🚨 Quick Troubleshooting

**Surveys not sending?**
- Check Gmail label exists: `psyt-beta-signups`
- Verify Formspree emails are being filtered
- Run `processBetaSignups()` manually

**Scoring not working?**
- Check form submission trigger is active
- Verify response sheet column mapping
- Test with `processSurveyResponse()` function

**Need to test?**
- Run `testBetaSystem()` in Apps Script
- Submit test email to Formspree
- Check logs in Apps Script execution history

---

## 📊 Monitoring Dashboard

### Google Sheets View:
| Email | Signup Date | Survey Sent | Completed | Score | Priority |
|-------|-------------|-------------|-----------|-------|----------|
| user@example.com | 2024-01-15 | 2024-01-15 | 2024-01-16 | 8 | High |

### Key Metrics to Track:
- Survey completion rate (target: 60%+)
- Average score (shows candidate quality)
- High-priority rate (7+ scores)
- Response depth (word count trends)

---

## 🎯 The 10 Survey Questions

1. What brings you here?
2. What do you hope to feel more/less of daily?
3. Small friction point you'd love softened?
4. What does well-being look like for you?
5. Tool/practice that's helped (or not)?
6. How do you prefer giving feedback? ⭐
7. Magic wand - change one thing?
8. What should builders understand about real life?
9. Anything else to share?
10. Your best email for updates?

**⭐ Question #6 is key for scoring** - "quick notes" = highest engagement

---

## 🔧 Quick Customizations

### Change Email Template:
Edit `createSurveyEmailHTML()` in Apps Script

### Adjust Scoring:
Modify `calculateBetaScore()` function weights

### Change Timing:
Update triggers in `setupTriggers()` (default: every 5 minutes)

### Add Team Members:
Update notification emails in `notifyTeamOfHighValueCandidate()`

---

## ✨ Success Indicators

### System is working when:
- New signups automatically get survey emails
- Responses are scored and logged in sheets  
- High-value candidates trigger team notifications
- You can filter and prioritize beta invitations
- Manual work is reduced to just reviewing candidates

### Monthly review:
- Analyze response patterns
- Adjust scoring weights if needed
- Refine survey questions based on insights
- Export high-priority candidates for beta access

---

*For complete setup instructions, see `/google-workspace-automation/SETUP-GUIDE.md`*
