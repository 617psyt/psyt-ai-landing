#!/bin/bash

# PSYT.AI Landing Page - Automated Cloudflare Pages Deployment Script
# This script handles the complete deployment process

set -e  # Exit on any error

echo "🚀 Starting PSYT.AI Landing Page Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}📋 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    print_error "Wrangler CLI not found. Installing..."
    npm install -g wrangler
    print_success "Wrangler installed successfully"
fi

# Check if user is authenticated with Cloudflare
print_step "Checking Cloudflare authentication..."
if ! wrangler whoami &> /dev/null; then
    print_warning "Not authenticated with Cloudflare. Please login:"
    wrangler login
fi

# Get account ID and update wrangler.toml
print_step "Getting Cloudflare account information..."
ACCOUNT_ID=$(wrangler whoami | grep "Account ID" | awk '{print $3}' || echo "")

if [ -z "$ACCOUNT_ID" ]; then
    print_warning "Could not automatically detect account ID. You may need to add it manually to wrangler.toml"
else
    # Update wrangler.toml with account ID
    sed -i '' "s/account_id = \"\"/account_id = \"$ACCOUNT_ID\"/" wrangler.toml
    print_success "Updated wrangler.toml with account ID"
fi

# Install dependencies
print_step "Installing dependencies..."
if command -v pnpm &> /dev/null; then
    pnpm install
else
    npm install
fi
print_success "Dependencies installed"

# Build the project
print_step "Building the project..."
if command -v pnpm &> /dev/null; then
    pnpm build
else
    npm run build
fi
print_success "Project built successfully"

# Deploy to Cloudflare Pages
print_step "Deploying to Cloudflare Pages..."

# Check if Pages project exists
if wrangler pages project list | grep -q "psyt-ai-landing"; then
    print_step "Updating existing Pages project..."
    wrangler pages deploy dist --project-name=psyt-ai-landing
else
    print_step "Creating new Pages project..."
    wrangler pages project create psyt-ai-landing --production-branch=main
    wrangler pages deploy dist --project-name=psyt-ai-landing
fi

print_success "Deployment completed!"

# Get the deployment URL
print_step "Getting deployment information..."
PROJECT_URL="https://psyt-ai-landing.pages.dev"
echo -e "${GREEN}📱 Your site is live at: ${PROJECT_URL}${NC}"

# Optionally open in browser (uncomment if desired)
# open "$PROJECT_URL"

echo ""
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo -e "${BLUE}📋 Next steps:${NC}"
echo "   1. Visit your site: $PROJECT_URL"
echo "   2. Set up custom domain in Cloudflare Pages dashboard (if needed)"
echo "   3. Configure GitHub integration for automatic deployments"
echo ""
echo -e "${YELLOW}💡 Tip: Run this script again anytime to redeploy!${NC}"
