# 🚀 Notion-Powered Landing Page & Product Catalog

> **A modern, full-featured landing page and product listing platform built with Vue.js, powered by Notion CMS, and deployed on Netlify. Perfect for real estate listings, product catalogs, e-commerce, or any content-driven website.**

[![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Notion](https://img.shields.io/badge/Notion-CMS-black?logo=notion)](https://notion.so/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?logo=netlify)](https://netlify.com/)
[![License](https://img.shields.io/badge/License-ISC-blue)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js)](https://nodejs.org/)

**Keywords:** `notion cms` `vue.js landing page` `product catalog` `real estate listings` `notion api` `headless cms` `netlify functions` `vue 3` `product management` `admin panel` `notion database` `static site generator` `jamstack` `serverless` `notion integration`

## 📋 Topics & Tags

`notion` `vue` `vuejs` `vue-3` `notion-api` `notion-cms` `headless-cms` `landing-page` `product-catalog` `real-estate` `e-commerce` `netlify` `netlify-functions` `serverless` `jamstack` `admin-panel` `product-management` `pinia` `vite` `tailwindcss` `primevue` `contact-form` `recaptcha` `image-upload` `netlify-blobs`

---

Welcome! This guide will help you set up a beautiful website that displays your products or listings. The best part? You can manage everything through Notion (a note-taking app) - no coding required once it's set up!

## ✨ Features & Capabilities

### For Visitors (Public Features)
- **Product Listings** - Browse products with images, descriptions, and pricing
- **Advanced Search** - Full-text search across products and listings
- **Smart Filtering** - Filter by price range, category, location, and more
- **Product Details** - Detailed product pages with image galleries and maps
- **Contact Forms** - Integrated contact forms with reCAPTCHA spam protection
- **Responsive Design** - Mobile-first design that works on all devices
- **SEO Optimized** - Search engine friendly URLs and meta tags

### For Administrators (Admin Panel)
- **Product Management** - Add, edit, or delete products through admin panel
- **Notion CMS Integration** - Manage all content directly from Notion databases
- **Image Upload** - Upload and manage product images via Netlify Blobs
- **Category Management** - Organize products into categories
- **Page Content Editor** - Edit Home, About, Contact pages without coding
- **Settings Dashboard** - Configure site settings, navigation, and more
- **Real-time Updates** - Changes in Notion appear on website instantly

## 🛠️ Technology Stack

- **Frontend Framework:** Vue.js 3.4 with Composition API
- **Build Tool:** Vite 5.0
- **UI Framework:** PrimeVue 4.4 + Tailwind CSS 3.4
- **State Management:** Pinia 3.0
- **Routing:** Vue Router 4.2
- **CMS/Backend:** Notion API (Headless CMS)
- **Hosting:** Netlify (Serverless Functions + Static Hosting)
- **File Storage:** Netlify Blobs
- **Form Protection:** Google reCAPTCHA v2
- **Maps:** Leaflet.js
- **Package Manager:** pnpm

**Perfect for:** Real estate listings, product catalogs, e-commerce sites, portfolio showcases, business directories, and any content-driven website that needs a powerful CMS without the complexity.

## 📑 Table of Contents

- [Features & Capabilities](#-features--capabilities)
- [Technology Stack](#️-technology-stack)
- [Use Cases](#-use-cases)
- [Quick Start](#-quick-start)
- [Prerequisites & System Requirements](#-prerequisites--system-requirements)
- [Installation Guide](#step-1-download-the-website-files)
- [Notion Setup](#step-3-set-up-notion-your-database)
- [Configuration](#step-4-configure-your-website-settings)
- [Local Development](#step-6-test-your-website-locally)
- [Netlify Deployment](#step-7-put-your-website-online-deploy-to-netlify)
- [Admin Panel](#how-to-use-the-admin-panel)
- [Troubleshooting](#troubleshooting-when-things-go-wrong)
- [FAQ](#-frequently-asked-questions)
- [Project Structure](#-understanding-the-project-structure)

## 🎯 Use Cases

This template is perfect for:

- **Real Estate Agencies** - Property listings with search and filters
- **E-commerce Stores** - Product catalogs with admin management
- **Business Directories** - List businesses with categories and locations
- **Portfolio Showcases** - Display work with categories and tags
- **Marketplace Platforms** - Multi-vendor product listings
- **Service Providers** - Showcase services with pricing and details
- **Event Listings** - Display events with filtering and search
- **Any Content-Driven Website** - That needs a powerful CMS

## ⚡ Quick Start

> **Note:** Make sure you have [Node.js 18+](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed before starting.

```bash
# 1. Clone the repository (replace with your repository URL)
git clone https://github.com/yourusername/landing-page.git
cd landing-page

# 2. Install dependencies
pnpm install
cd frontend && pnpm install && cd ..

# 3. Set up environment variables
cp env.example .env
# Edit .env file with your Notion API keys (see Step 3 & 4 below)

# 4. Start development server
pnpm dev
```

Visit `http://localhost:8888` to see your website!

**Next Steps:** Follow the detailed setup guide below to configure Notion databases and deploy to Netlify.

## 📋 Prerequisites & System Requirements

Before we begin, make sure you have these accounts and tools:

### Required Software

1. **Node.js 18 or higher** - This is free software that runs website code
   - Download it here: https://nodejs.org/
   - Choose the version that says "LTS" (Long Term Support)
   - Install it like any other program
   - Verify installation: Open Terminal/Command Prompt and type `node --version` (should show v18.x.x or higher)

2. **pnpm Package Manager** - A fast, efficient package manager
   - Install it: `npm install -g pnpm`
   - Verify installation: Type `pnpm --version` in Terminal/Command Prompt

3. **Git** (optional but recommended) - For version control
   - Download: https://git-scm.com/
   - Or use GitHub Desktop: https://desktop.github.com/

### Required Accounts

4. **A Notion Account** - This is where you'll store your product information
   - Sign up for free: https://www.notion.so/
   - You'll need this to create databases and integrations

5. **A Netlify Account** - This is where your website will live online
   - Sign up for free: https://www.netlify.com/
   - Free tier includes: 100GB bandwidth, 300 build minutes/month

6. **A Google Account** (optional but recommended) - For spam protection on contact forms
   - Used to set up reCAPTCHA
   - Free to use

### System Requirements

- **Operating System:** Windows 10+, macOS 10.15+, or Linux
- **RAM:** 4GB minimum (8GB recommended)
- **Disk Space:** 500MB free space
- **Internet Connection:** Required for installation and deployment

**Don't worry if this sounds complicated!** We'll walk through each step together.

## Step 1: Download the Website Files

### Option A: Using Git (Recommended)

If you have Git installed, clone the repository:

```bash
# Replace with your actual repository URL
git clone https://github.com/yourusername/landing-page.git
cd landing-page
```

**Don't have Git?** Install it from https://git-scm.com/ or use GitHub Desktop: https://desktop.github.com/

### Option B: Download as ZIP

If you prefer not to use Git:

1. Click the green "Code" button on GitHub
2. Select "Download ZIP"
3. Extract the ZIP file to a folder on your computer (Desktop or Documents)
4. Open Terminal/Command Prompt and navigate to the extracted folder
5. Remember where you put it - you'll need to find it later!

## Step 2: Install Required Software

### Install Node.js (If You Haven't Already)

1. Go to https://nodejs.org/
2. Click the big green button that says "Download Node.js (LTS)"
3. Run the installer and follow the instructions
4. Restart your computer after installing

### Install pnpm (Package Manager)

Think of pnpm as a helper tool that downloads all the pieces your website needs.

1. Open your computer's Terminal (Mac) or Command Prompt (Windows)
   - **Mac**: Press Cmd + Space, type "Terminal", press Enter
   - **Windows**: Press Windows key, type "cmd", press Enter
2. Type this command and press Enter:
   ```
   npm install -g pnpm
   ```
3. Wait for it to finish (it might take a minute or two)

### Install the Website's Dependencies

Dependencies are like ingredients - your website needs them to work.

1. In your Terminal/Command Prompt, navigate to the project folder:
   - Type `cd ` (with a space after cd)
   - Drag the project folder into the Terminal window
   - Press Enter

2. Install the main dependencies:
   ```
   pnpm install
   ```
   Wait for this to finish (this might take 2-5 minutes)

3. Install the frontend dependencies:
   ```
   cd frontend
   pnpm install
   cd ..
   ```
   Wait for this to finish too

**What's happening?** The computer is downloading all the code libraries your website needs to run. It's like downloading all the apps on your phone - it takes time but you only do it once.

## Step 3: Set Up Notion (Your Database)

Notion is like a smart spreadsheet where you'll store all your product information. The website reads from Notion to show your products.

### Part 1: Create a Notion Integration

An "integration" is like giving your website permission to read and write to your Notion pages.

1. Go to https://www.notion.so/my-integrations
2. Click the "+ New integration" button
3. Give it a name like "My Website" or "Landing Page"
4. Select your workspace (usually just click the one that appears)
5. Click "Submit"
6. **IMPORTANT**: Copy the "Internal Integration Token" - it looks like `secret_abc123xyz...`
   - This is like a password - keep it safe!
   - You'll need this in a moment

### Part 2: Create Your Product Database

A database in Notion is like a table with rows (products) and columns (product details).

1. Open Notion and create a new page
2. Type `/database` and select "Table - Inline" or "Table - Full page"
3. Name it "Products" or "My Products"
4. Add columns for your product information:
   - **Title** (text) - The product name
   - **Description** (text) - What the product is
   - **Price** (number) - How much it costs
   - **Category** (select) - What type of product (e.g., "Electronics", "Clothing")
   - **Location** (text) - Where it's located (if applicable)
   - **Images** (files) - Product photos
   - **Status** (select) - Available, Sold, etc.
   - Add any other columns you want!

5. **Share the database with your integration:**
   - Click the "..." (three dots) in the top right of your database
   - Click "Add connections"
   - Select the integration you created earlier
   - Click "Confirm"

6. **Get the Database ID:**
   - Look at the URL in your browser
   - It will look like: `https://www.notion.so/workspace/abc123def456?v=...`
   - Copy the part between the last `/` and `?v=` - that's your Database ID
   - Example: If the URL is `https://www.notion.so/workspace/abc123def456?v=789`, your ID is `abc123def456`

### Part 3: Create Other Databases (Optional but Recommended)

You'll also want databases for:

**Contact Form Submissions:**
1. Create another database called "Contact Submissions"
2. Add columns: Name, Email, Phone, Message, Date
3. Share it with your integration
4. Copy the Database ID

**Page Content:**
1. Create a database called "Pages"
2. This will store content for your Home, About, and Contact pages
3. Share it with your integration
4. Copy the Database ID

**Settings:**
1. Create a database called "Settings"
2. This stores your website settings (site name, colors, etc.)
3. Share it with your integration
4. Copy the Database ID

### Part 4: Get Parent Page ID (Optional but Helpful)

If you want to keep all your databases organized in one place:

1. Create a page in Notion (like "My Website")
2. Put all your databases on this page
3. Copy the Page ID from the URL (same way as Database ID)

## Step 4: Configure Your Website Settings

Now we need to tell your website where to find your Notion databases and how to connect to them.

### Create the Configuration File

1. In your project folder, find a file called `env.example`
2. Copy it and rename the copy to `.env` (yes, just a dot and "env" - no name before the dot)
   - **Windows users**: You might need to enable "Show file extensions" in File Explorer
   - If you can't create a file starting with a dot, create it as `env` and then rename it to `.env`

### Fill In Your Information

Open the `.env` file in a text editor (Notepad on Windows, TextEdit on Mac) and replace the placeholder text:

```env
NOTION_API_KEY=secret_paste_your_integration_token_here
NOTION_PRODUCTS_DATABASE_ID=paste_your_products_database_id_here
NOTION_CONTACT_DATABASE_ID=paste_your_contact_database_id_here
NOTION_PARENT_PAGE_ID=paste_your_parent_page_id_here
ADMIN_CODE=choose_a_secure_password_here
RECAPTCHA_SITE_KEY=we_will_get_this_next
RECAPTCHA_SECRET_KEY=we_will_get_this_next
```

**Important Notes:**
- Replace everything after the `=` sign with your actual information
- **No spaces** around the `=` sign (correct: `KEY=value`, wrong: `KEY = value`)
- **No quotes** needed (unless your value contains special characters)
- For `ADMIN_CODE`, choose a strong password (12+ characters, mix of letters, numbers, symbols)
- Leave the RECAPTCHA keys as-is for now - we'll set those up in Step 5
- Each line should have exactly one variable
- Don't add blank lines between variables (optional, but cleaner)

## Step 5: Set Up Spam Protection (reCAPTCHA) - Optional but Recommended

reCAPTCHA is Google's way of preventing spam bots from filling out your contact form. It's the "I'm not a robot" checkbox you see on websites.

1. Go to https://www.google.com/recaptcha/admin
2. Sign in with your Google account
3. Click "+" to create a new site
4. Fill in the form:
   - **Label**: Give it a name like "My Website"
   - **reCAPTCHA type**: Choose "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: For now, add `localhost` (we'll add your real website address later)
5. Accept the terms and click "Submit"
6. You'll see two keys:
   - **Site Key** - Copy this to `RECAPTCHA_SITE_KEY` in your `.env` file
   - **Secret Key** - Copy this to `RECAPTCHA_SECRET_KEY` in your `.env` file

## Step 6: Test Your Website Locally

Before putting your website online, let's make sure it works on your computer first.

1. Open Terminal/Command Prompt
2. Navigate to your project folder (use `cd` like before)
3. Type:
   ```
   pnpm dev
   ```
4. Wait for it to finish (you'll see messages scrolling)
5. When it says "Server ready" or similar, open your web browser
6. Go to: http://localhost:8888
7. You should see your website!

**What's happening?** Your computer is running a mini version of your website that only you can see. This lets you test everything before making it public.

**To stop the server:** 
- Press `Ctrl + C` in the Terminal/Command Prompt
- Or close the Terminal window

**Troubleshooting:**
- If port 8888 is already in use, the server will use a different port (check the terminal output)
- If you see errors, make sure your `.env` file is configured correctly
- Make sure you've completed Steps 3-5 (Notion setup and configuration)

## Step 7: Put Your Website Online (Deploy to Netlify)

Now let's make your website available to everyone on the internet!

### Method 1: Using Netlify's Website (Easier for Beginners)

This method uses Netlify's website instead of typing commands.

1. **Put Your Code Online (GitHub/GitLab/Bitbucket):**
   - If you don't have a GitHub account, create one: https://github.com/ (it's free!)
   - Create a new repository:
     - Click the "+" icon in the top right → "New repository"
     - Name it (e.g., "my-landing-page")
     - Choose "Public" or "Private"
     - **Don't** initialize with README (you already have one)
     - Click "Create repository"
   - Upload your files:
     - **Option 1:** Use GitHub Desktop app (easiest): https://desktop.github.com/
     - **Option 2:** Use Git commands (see Quick Start section)
     - **Option 3:** Drag and drop files using GitHub's web interface

2. **Connect to Netlify:**
   - Go to https://app.netlify.com/
   - Sign in or create an account
   - Click "Add new site" → "Import an existing project"
   - Click "GitHub" (or GitLab/Bitbucket if you used those)
   - Authorize Netlify to access your account
   - Select your repository
   - Click "Import"

3. **Configure Build Settings:**
   Netlify needs to know how to build your website:
   - **Build command**: Type `pnpm build`
   - **Publish directory**: Type `public`
   - **Base directory**: Leave this empty
   - Click "Deploy site"

4. **Add Your Secret Information (Environment Variables):**
   After the site is created:
   - Go to your site in Netlify
   - Click "Site settings" (in the top menu)
   - Click "Environment variables" (in the left menu)
   - Click "Add variable" for each of these:
     - `NOTION_API_KEY` = (paste your Notion integration token)
     - `NOTION_PRODUCTS_DATABASE_ID` = (paste your products database ID)
     - `NOTION_CONTACT_DATABASE_ID` = (paste your contact database ID)
     - `NOTION_PARENT_PAGE_ID` = (paste your parent page ID)
     - `ADMIN_CODE` = (paste your admin password)
     - `RECAPTCHA_SITE_KEY` = (paste your reCAPTCHA site key)
     - `RECAPTCHA_SECRET_KEY` = (paste your reCAPTCHA secret key)
   - Click "Save" after adding each one

5. **Enable File Storage (Netlify Blobs):**
   - Still in Site settings
   - Click "Build & deploy" in the left menu
   - Scroll down to "Post processing"
   - Find "Netlify Blobs" and turn it ON
   - This lets you upload images

6. **Redeploy Your Site:**
   - Go back to your site's main page
   - Click "Deploys" in the top menu
   - Click "Trigger deploy" → "Deploy site"
   - Wait for it to finish (usually 2-5 minutes)

### Method 2: Using Command Line (For More Advanced Users)

If you're comfortable with Terminal/Command Prompt:

1. Install Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```
   netlify login
   ```
   (This will open your browser to sign in)

3. Initialize your site:
   ```
   netlify init
   ```
   Follow the prompts:
   - Choose "Create & configure a new site"
   - Select your team
   - Choose a site name
   - Build command: `pnpm build`
   - Publish directory: `public`

4. Set environment variables:
   ```
   netlify env:set NOTION_API_KEY "your_key_here"
   netlify env:set NOTION_PRODUCTS_DATABASE_ID "your_id_here"
   netlify env:set NOTION_CONTACT_DATABASE_ID "your_id_here"
   netlify env:set NOTION_PARENT_PAGE_ID "your_id_here"
   netlify env:set ADMIN_CODE "your_password_here"
   netlify env:set RECAPTCHA_SITE_KEY "your_key_here"
   netlify env:set RECAPTCHA_SECRET_KEY "your_key_here"
   ```

5. Enable Blobs:
   ```
   netlify blobs:enable
   ```

6. Deploy:
   ```
   pnpm deploy
   ```

## Step 8: Final Setup Steps

### Update reCAPTCHA for Your Live Website

1. Go back to https://www.google.com/recaptcha/admin
2. Edit your reCAPTCHA site
3. Add your Netlify website address to the "Domains" list
   - Your Netlify address looks like: `yoursitename.netlify.app`
   - Or if you have a custom domain: `www.yourdomain.com`

### Test Your Live Website

1. Visit your Netlify website URL
2. Check that products are showing
3. Try the search function
4. Test the contact form
5. Go to `/admin` (add `/admin` to the end of your website URL)
6. Enter your admin password
7. Try adding or editing a product

## How to Use the Admin Panel

The admin panel is your control center for managing your website.

1. Go to your website and add `/admin` to the URL
   - Example: `https://yoursite.netlify.app/admin`
2. Enter your admin password (the `ADMIN_CODE` you set earlier)
3. You'll see a dashboard with:
   - **Statistics**: How many products, categories, etc.
   - **Products**: Add, edit, or delete products
   - **Categories**: Manage product categories
   - **Content**: Edit your Home, About, and Contact pages
   - **Settings**: Change your website name, colors, and other settings

**Pro Tip:** You can also manage products directly in Notion! Just edit your Products database in Notion, and the changes will appear on your website.

## Troubleshooting: When Things Go Wrong

### "I can't see my products on the website"

**Check these things:**
1. Did you share your Notion database with the integration?
   - Go to your database in Notion
   - Click "..." → "Connections" → Make sure your integration is listed
2. Is your `NOTION_API_KEY` correct in the `.env` file and Netlify?
   - Double-check you copied the entire token (it starts with `secret_`)
3. Is your `NOTION_PRODUCTS_DATABASE_ID` correct?
   - Make sure you copied the ID from the URL correctly

### "The admin panel says my password is wrong"

**Try these:**
1. Check for extra spaces when you type the password
2. Make sure the `ADMIN_CODE` in your `.env` file matches what's in Netlify
3. Clear your browser's cookies and try again
4. Make sure you're using the same password you set in the environment variables

### "Images won't upload"

**Check these:**
1. Is Netlify Blobs enabled?
   - Go to Netlify → Site settings → Build & deploy → Post processing
   - Make sure "Netlify Blobs" is turned ON
2. Are your images too large?
   - Try images smaller than 5MB
   - You can resize images using free tools online

### "The website won't build or deploy"

**Try these:**
1. Make sure all dependencies are installed:
   - Run `pnpm install` in the main folder
   - Run `pnpm install` in the `frontend` folder
2. Check your Node.js version:
   - Open Terminal/Command Prompt
   - Type `node --version`
   - It should show v18 or higher
   - If not, update Node.js from nodejs.org
3. Check the build logs in Netlify:
   - Go to your site in Netlify
   - Click "Deploys"
   - Click on the failed deploy
   - Read the error messages - they usually tell you what's wrong

### "Contact form isn't working"

**Check these:**
1. Is your `NOTION_CONTACT_DATABASE_ID` correct?
2. Is the contact database shared with your integration?
3. Are your reCAPTCHA keys correct?
4. Check the browser console for errors (Press F12, click "Console" tab)

### "I'm getting confused with all these IDs and keys"

**You're not alone!** Here's a cheat sheet:

- **NOTION_API_KEY**: The token from your Notion integration (starts with `secret_`)
- **Database ID**: The long string of letters/numbers in your Notion database URL
- **Page ID**: Similar to Database ID, but for a regular Notion page
- **ADMIN_CODE**: A password you choose to protect your admin panel
- **reCAPTCHA keys**: Two keys from Google (Site Key and Secret Key)

**Pro Tip:** Create a text file on your computer with all these values saved, so you don't lose them!

## ❓ Frequently Asked Questions

### General Questions

**Q: Do I need to know how to code to use this?**  
A: No! Once set up, you can manage everything through Notion or the admin panel. The initial setup requires following instructions, but no coding knowledge is needed.

**Q: Is this free to use?**  
A: Yes! The template is free. You'll need free accounts for Notion and Netlify. Netlify's free tier is generous and should be enough for most sites.

**Q: Can I use this for commercial purposes?**  
A: Yes! This project uses the ISC license, which allows commercial use.

**Q: How long does setup take?**  
A: For first-time users, expect 30-60 minutes. This includes creating Notion databases, setting up accounts, and deploying.

**Q: Can I customize the design?**  
A: Yes! The frontend uses Vue.js and Tailwind CSS, which are highly customizable. You can modify colors, layouts, and components.

### Technical Questions

**Q: What if I don't have a GitHub account?**  
A: You can deploy directly using Netlify CLI (Method 2) without GitHub. However, using GitHub makes updates easier.

**Q: Can I use a different hosting provider instead of Netlify?**  
A: The project is optimized for Netlify. You'd need to adapt the serverless functions for other platforms (Vercel, AWS, etc.).

**Q: Do I need to keep my computer running for the website to work?**  
A: No! Once deployed to Netlify, your website runs on Netlify's servers 24/7.

**Q: Can I use a custom domain?**  
A: Yes! Netlify supports custom domains. Go to Site settings → Domain management → Add custom domain.

**Q: What happens if I exceed Netlify's free tier limits?**  
A: Netlify will notify you. You can upgrade to a paid plan or optimize your usage. Most small sites stay within free limits.

### Notion Questions

**Q: Can I use existing Notion databases?**  
A: Yes! As long as you share them with your integration and have the correct structure (Title field, etc.).

**Q: What if I delete a database in Notion?**  
A: Your website will show an error. You'll need to update the database ID in your environment variables.

**Q: Can multiple people edit the Notion database?**  
A: Yes! Anyone with access to your Notion workspace can edit. Changes appear on your website automatically.

**Q: Is there a limit to how many products I can have?**  
A: Notion has limits, but they're very high (thousands of pages). Your website will handle hundreds of products easily.

### Troubleshooting Questions

**Q: The website shows "No products found" - what's wrong?**  
A: Check that: 1) Your Notion database is shared with the integration, 2) Your database ID is correct, 3) You have products in the database.

**Q: Images aren't showing up - why?**  
A: Make sure Netlify Blobs is enabled in your Netlify site settings. Also check that image URLs are correct.

**Q: Can I change the admin password after setup?**  
A: Yes! Update the `ADMIN_CODE` in your `.env` file and in Netlify environment variables, then redeploy.

## 🆘 Getting Help

If you're stuck:

1. **Read the error messages carefully** - They often tell you exactly what's wrong
2. **Check the Netlify logs** - Go to your site → Deploys → Click a deploy → See the logs
3. **Check your browser console** - Press F12 → Click "Console" to see errors
4. **Double-check your environment variables** - Make sure everything is spelled correctly
5. **Start over with a fresh install** - Sometimes starting fresh helps

## 🔒 Security Best Practices

### Keep These Secret

These are sensitive credentials that should never be shared:

- **`NOTION_API_KEY`** - Grants access to your Notion workspace
- **`ADMIN_CODE`** - Protects your admin panel from unauthorized access
- **`RECAPTCHA_SECRET_KEY`** - Used for form validation

### Security Do's and Don'ts

**❌ Never:**
- Share these keys publicly (GitHub, forums, social media)
- Put them in emails, messages, or chat apps
- Commit your `.env` file to version control (it should be in `.gitignore`)
- Use weak passwords for `ADMIN_CODE`
- Share screenshots that show your keys

**✅ Always:**
- Use strong, unique passwords for `ADMIN_CODE` (12+ characters, mix of letters, numbers, symbols)
- Keep backups of your `.env` file in a secure password manager
- Rotate keys immediately if you suspect they've been compromised
- Use different keys for development and production
- Review who has access to your Notion workspace regularly
- Enable two-factor authentication on your Notion and Netlify accounts

### If Your Keys Are Compromised

1. **Immediately revoke the compromised key:**
   - For Notion: Go to integrations → Delete the integration → Create a new one
   - For reCAPTCHA: Delete and recreate in Google reCAPTCHA admin
   - For Admin Code: Update in `.env` and Netlify environment variables

2. **Update all instances:**
   - Local `.env` file
   - Netlify environment variables
   - Any other places where keys are stored

3. **Redeploy your site** with the new keys

## What's Next?

Once your website is up and running:

1. **Add your products** through the admin panel or directly in Notion
2. **Customize your pages** - Edit the Home, About, and Contact pages
3. **Upload product images** - Make sure they're good quality and not too large
4. **Test everything** - Try all the features to make sure they work
5. **Share your website** - Give your Netlify URL to customers!

## 📁 Understanding the Project Structure

You don't need to understand this to use the website, but here's what's in the project folder:

```
landing-page/
├── frontend/                    # Vue.js frontend application
│   ├── src/
│   │   ├── components/         # Reusable Vue components
│   │   │   ├── admin/          # Admin panel components
│   │   │   ├── ProductCard.vue # Product display component
│   │   │   ├── SearchBar.vue   # Search functionality
│   │   │   └── ...
│   │   ├── pages/              # Page components (Home, Products, Admin)
│   │   ├── stores/             # Pinia state management stores
│   │   ├── services/           # API services (Notion integration)
│   │   ├── composables/        # Vue composables (reusable logic)
│   │   └── utils/              # Utility functions
│   ├── public/                 # Static assets (images, icons)
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite build configuration
├── netlify/
│   └── functions/              # Netlify serverless functions
│       ├── notion-crud.js      # Notion API CRUD operations
│       ├── upload-file.js      # Image upload handler
│       ├── submit-contact.js   # Contact form handler
│       ├── verify-admin.js     # Admin authentication
│       └── sitemap.js          # Sitemap generator
├── netlify.toml                # Netlify deployment configuration
├── package.json                # Root dependencies
├── env.example                 # Environment variables template
└── README.md                   # This file!
```

### Key Files Explained

- **`frontend/src/`** - All the Vue.js code that makes your website work
- **`netlify/functions/`** - Serverless functions that connect to Notion API
- **`.env`** - Your secret configuration (API keys, database IDs)
- **`netlify.toml`** - Tells Netlify how to build and deploy your site
- **`package.json`** - Lists all the code libraries your project needs

**You don't need to edit any of these files** - just use the admin panel or Notion to manage your content!

### Technologies Used

- **Vue.js 3** - Modern JavaScript framework for building user interfaces
- **Vite** - Fast build tool and development server
- **Pinia** - State management for Vue applications
- **PrimeVue** - Professional UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Notion API** - Connect to Notion databases
- **Netlify Functions** - Serverless backend functions
- **Netlify Blobs** - File storage for images

---

## Quick Reference: All the Commands You Might Need

**On your computer (local development):**
- `pnpm install` - Install dependencies (do this first)
- `pnpm dev` - Start the website on your computer
- `pnpm build` - Create the files needed to put online

**For Netlify (if using command line):**
- `netlify login` - Sign in to Netlify
- `netlify init` - Set up your site
- `netlify env:set VARIABLE_NAME "value"` - Set a secret variable
- `pnpm deploy` - Put your website online

---

## 🔗 Related Projects & Resources

### Similar Projects
- **Notion CMS Templates** - Headless CMS solutions using Notion
- **Vue.js Landing Pages** - Modern landing page templates
- **Product Catalog Templates** - E-commerce and catalog solutions
- **Real Estate Listings** - Property listing platforms
- **Netlify Functions Examples** - Serverless function templates

### Learning Resources
- [Notion API Documentation](https://developers.notion.com/) - Official Notion API docs
- [Vue.js Documentation](https://vuejs.org/) - Vue.js framework guide
- [Netlify Functions Guide](https://docs.netlify.com/functions/overview/) - Serverless functions
- [Netlify Blobs Documentation](https://docs.netlify.com/blobs/overview/) - File storage guide
- [PrimeVue Components](https://primevue.org/) - UI component library
- [Tailwind CSS Docs](https://tailwindcss.com/) - Utility-first CSS framework

### Community & Support
- [Notion Community](https://www.notion.so/community) - Notion user community
- [Vue.js Forum](https://forum.vuejs.org/) - Vue.js community discussions
- [Netlify Community](https://community.netlify.com/) - Netlify support forum

## 🎓 What You'll Learn

By using this project, you'll understand:
- How to integrate Notion as a headless CMS
- Building Vue.js applications with Composition API
- Deploying serverless functions on Netlify
- Managing file uploads with Netlify Blobs
- Creating admin panels for content management
- Implementing search and filtering functionality
- Building responsive, mobile-first designs

## 📊 Project Information

- **Version:** 1.0.0
- **Framework:** Vue.js 3.4
- **Build Tool:** Vite 5.0
- **UI Components:** PrimeVue 4.4
- **Styling:** Tailwind CSS 3.4
- **State Management:** Pinia 3.0
- **Package Manager:** pnpm
- **Deployment:** Netlify (Serverless)
- **License:** ISC
- **Node.js Required:** 18.0.0 or higher

## 🌟 Features in Detail

### Search & Discovery
- Full-text search across all product fields
- Advanced filtering by multiple criteria
- Price range filtering with visual histogram
- Category-based filtering
- Location-based search
- Real-time search results

### Content Management
- Notion-powered CMS (no database setup required)
- Dynamic form generation based on Notion schema
- Multi-image upload support
- Rich text content support
- Custom field types support
- Automatic schema detection

### Performance & SEO
- Server-side rendering ready
- Optimized image loading
- Lazy loading for better performance
- SEO-friendly URLs
- Meta tags management
- Sitemap generation

## 🤝 Contributing

We welcome contributions! This project can be improved with your help.

### How to Contribute

1. **Fork the repository** - Click the "Fork" button on GitHub
2. **Clone your fork** - `git clone https://github.com/yourusername/landing-page.git`
3. **Create a feature branch** - `git checkout -b feature/your-feature-name`
4. **Make your changes** - Add features, fix bugs, or improve documentation
5. **Test your changes** - Make sure everything works locally
6. **Commit your changes** - `git commit -m "Add: your feature description"`
7. **Push to your fork** - `git push origin feature/your-feature-name`
8. **Submit a Pull Request** - Go to the original repository and click "New Pull Request"

### Contribution Guidelines

- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed
- Test your changes thoroughly
- Be respectful in discussions

### Areas That Need Help

- 🐛 Bug fixes
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🌐 Translations
- 🧪 Test coverage
- 📖 Tutorials and examples

## 📝 License

This project is licensed under the **ISC License**.

**What this means:**
- ✅ You can use this for personal projects
- ✅ You can use this for commercial projects
- ✅ You can modify the code
- ✅ You can distribute the code
- ⚠️ You must include the original license notice
- ❌ No warranty is provided

See the [LICENSE](LICENSE) file for full details.

## 🔍 Search Keywords

This project can be found by searching for:
- `notion cms vue`
- `notion landing page`
- `vue product catalog`
- `notion api integration`
- `headless cms vue`
- `netlify notion`
- `vue admin panel`
- `notion database website`
- `vue real estate listings`
- `jamstack notion`
- `serverless vue`
- `notion headless cms`
- `vue product management`
- `notion e-commerce`
- `vue netlify functions`

---

**Remember:** This might seem complicated at first, but once it's set up, you'll mostly just use Notion or the admin panel to manage your products. You won't need to touch the code again!

⭐ **If this project helped you, consider giving it a star!**

Good luck with your website! 🚀
