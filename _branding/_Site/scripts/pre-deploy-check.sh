#!/bin/bash

echo "==================================="
echo "SELLISH PRE-DEPLOYMENT CHECKLIST"
echo "==================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ISSUES=0

# Check 1: .env file exists
echo "1. Checking for .env.local..."
if [ -f .env.local ]; then
  echo -e "${GREEN}✓${NC} .env.local exists"
else
  echo -e "${RED}✗${NC} .env.local missing (copy from .env.local.example)"
  ISSUES=$((ISSUES+1))
fi

# Check 2: Next.js version
echo "2. Checking Next.js version..."
NEXT_VERSION=$(grep '"next":' package.json | grep -oE '[0-9]+\.[0-9]+\.[0-9]+')
if [[ "$NEXT_VERSION" =~ ^15\.(5|6|7|8|9) ]] || [[ "$NEXT_VERSION" =~ ^1[6-9]\. ]] || [[ "$NEXT_VERSION" =~ ^[2-9][0-9]\. ]]; then
  echo -e "${GREEN}✓${NC} Next.js $NEXT_VERSION (secure)"
else
  echo -e "${RED}✗${NC} Next.js $NEXT_VERSION (vulnerable, upgrade to 15.5.9+)"
  ISSUES=$((ISSUES+1))
fi

# Check 3: Security headers in next.config.js
echo "3. Checking security headers..."
if grep -q "Content-Security-Policy" next.config.js; then
  echo -e "${GREEN}✓${NC} Security headers configured"
else
  echo -e "${RED}✗${NC} Security headers missing in next.config.js"
  ISSUES=$((ISSUES+1))
fi

# Check 4: Build succeeds
echo "4. Testing production build..."
if npm run build > /dev/null 2>&1; then
  echo -e "${GREEN}✓${NC} Production build successful"
else
  echo -e "${RED}✗${NC} Production build failed (run 'npm run build' for details)"
  ISSUES=$((ISSUES+1))
fi

# Check 5: Required files exist
echo "5. Checking required files..."
FILES=("app/not-found.tsx" "app/error.tsx" "public/robots.txt" "app/sitemap.ts" ".gitignore")
for FILE in "${FILES[@]}"; do
  if [ -f "$FILE" ]; then
    echo -e "   ${GREEN}✓${NC} $FILE"
  else
    echo -e "   ${RED}✗${NC} $FILE missing"
    ISSUES=$((ISSUES+1))
  fi
done

# Check 6: Placeholder content replaced
echo "6. Checking for placeholder content..."
if grep -r "placeholder" app/privacy/page.tsx app/terms/page.tsx 2>/dev/null | grep -i "placeholder" > /dev/null; then
  echo -e "${YELLOW}⚠${NC} Privacy/Terms pages may have placeholder content"
  ISSUES=$((ISSUES+1))
else
  echo -e "${GREEN}✓${NC} Legal pages appear updated"
fi

# Summary
echo ""
echo "==================================="
if [ $ISSUES -eq 0 ]; then
  echo -e "${GREEN}ALL CHECKS PASSED! Ready to deploy.${NC}"
  exit 0
else
  echo -e "${RED}FOUND $ISSUES ISSUE(S). Fix before deploying.${NC}"
  exit 1
fi
