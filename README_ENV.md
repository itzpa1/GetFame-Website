# Environment Variables Setup

This project uses environment variables to securely store sensitive configuration.

## Quick Start

1. **Copy the example file:**

   ```bash
   cp .env.example .env
   ```

2. **Update `.env` with your actual values:**

   ```env
   # Google Forms Configuration
   VITE_GOOGLE_FORM_ACTION_URL=https://docs.google.com/forms/u/0/d/e/YOUR_ACTUAL_FORM_ID/formResponse

   # API Configuration
   VITE_API_BASE_URL=https://your-actual-api-domain.com
   ```

3. **Restart your development server:**
   ```bash
   npm run dev
   ```

## Environment Variables

### `VITE_GOOGLE_FORM_ACTION_URL`

The Google Form action URL for the Contact Us form.

**How to get this:**

1. Open your Google Form
2. Click ⋮ → "Get pre-filled link"
3. Fill dummy data → "Get link"
4. Replace `/viewform?` with `/formResponse`
5. Remove everything after `/formResponse`

### `VITE_API_BASE_URL`

The base URL for your API endpoints (used in demo and proxy).

**Example:** `https://your-api-domain.com`

## Deployment (Vercel)

When deploying to Vercel, add these environment variables:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add:
   - `VITE_GOOGLE_FORM_ACTION_URL` = Your Google Form URL
   - `VITE_API_BASE_URL` = Your API base URL
   - `API_BASE_URL` = Same as VITE_API_BASE_URL (for Edge functions)

## Security Notes

⚠️ **Never commit `.env` files** - they're in `.gitignore`  
✅ `.env.example` is safe to commit (no sensitive data)  
🔒 Variables prefixed with `VITE_` are exposed to client-side  
📝 Only add non-sensitive config to client-side variables

## Troubleshooting

**Form not submitting?**

- Check `.env` file exists in project root
- Verify `VITE_GOOGLE_FORM_ACTION_URL` is set
- Restart dev server after changing env vars

**API calls failing?**

- Verify `VITE_API_BASE_URL` is correct
- Check Vercel environment variables are set
- Ensure `API_BASE_URL` is set for Edge functions
