@echo off
echo "We are going to log into GitHub securely..."
gh auth login --web
echo "Setting up Git helper..."
gh auth setup-git
echo "Pushing code to GitHub Repository!"
git push -u origin main
echo "Push Finished! You can now close this window."
pause
