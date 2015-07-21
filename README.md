# lab2-beg-track

### Lab 2, Beginning Track

1. Make sure you're logged in to your account on GitHub.
2. Go to <a href = "https://github.com/stephanielingwood/lab2-beg-track">https://github.com/stephanielingwood/lab2-beg-track</a> and click on the "Fork" button in the upper right. This will create a new copy of the repo, one that's associated with your account. This will take you to your account on GitHub - notice that the name in the upper left has changed from mine to yours, and underneath it should say "forked from stephanielingwood/lab2-beg-track".
3. Copy the link in the "HTTPS Clone URL" box on the right. Tip: that link should have your username in it, not mine.
4. Open your terminal and navigate to your projects directory.
5. Run this: `git clone paste-in-that-url-here`
6. `cd lab2-beg-track`
7. Run `npm install`.
8. Your assignment is in lab2.js. There are detailed instructions in the
comments. Be sure to read everything. Run lab2.js with `node lab2.js`.
9. Before you turn in your assignment, run `grunt` to check for jshint and jscs errors/warnings. Fix all the errors.

#### Turning in the assignment
Submit a link to a pull request. To do this, do the following:

1. Open your terminal and navigate to the lab2-beg-track directory.
2. Make a new branch and switch to it: `git checkout -b yourBranchNameHere`
3. Stage all your files for the commit: `git add .`  (Yes, you need that period.)
4. Make sure that you're on the correct branch, and that the files are indeed staged: `git status`
5. Commit the files: `git commit -m "a descriptive message of what you've done goes here"`
6. Push the commit to a branch on GitHub: `git push origin yourBranchNameHere` . It should ask you for your GitHub username and password.
7. Go to your repo on GitHub. Look for the green button that says "Compare and Pull Request"
8. In the grey area near the top of the screen, there should be two dropdowns. One should say "base", and the other "compare". From the "base" dropdown, select "master". (Your master branch, not mine.) From the "compare" dropdown, select the name of your branch (if it's not already selected).
9. Click the green "Create Pull Request" button. Then, copy the url and submit that in Canvas. Wait to merge this pull request until after I've graded it.

Sources:

W3school.com = array and string js methods
stackoverflow = array and string js methods