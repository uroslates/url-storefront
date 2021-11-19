# Project Contribution

Here you can find all the necessary information for helping you making yourself a ```url-storefront```'s **Project Contributor**.

## Helping Others

An easy way to start is by helping others who may have questions or need support. Look for such requests here:

- Our [GitHub issue tracking](https://github.com/uroslates/url-storefront/issues)
- Stack Overflow posts tagged with ```url-storefront```

## Reporting Issues

We are using [GitHub issue tracking](https://github.com/uroslates/url-storefront/issues) for tracking reported user stories and bugs.

### Determining if an Issue Should be Created

Analyzing reports is a bit of work, so please ask yourself these questions before creating an issue:

- **Does the bug really apply to ```url-storefront```?**
  - There may be reasons the problem is occurring that have nothing to do with the ```url-storefront``` storefront code. Consider the following:
    - the problem may be caused by code that is not part of ```url-storefront```.
    - The behavior may be different from what you expect, but may be working as designed.
- **Is the problem reproducible in the latest release?**
  - If you are not using the latest libraries or source code, please try to reproduce with the latest code first.
  - Make sure the problem is consistently reproducible using repeatable steps.
- **Has this bug already been reported?**
  - Please search the [issue tracker](https://github.com/uroslates/url-storefront/issues) for a similar bug before reporting the issue as a new bug.

If non of the above was matched and the bug indeed does indeed apply to ```url-storefront``` code, than please [create an issue](https://github.com/uroslates/url-storefront/issues).

### Providing the Right Information for the Issue

- Summarize the issue well. The following are some guidelines:
  - Precisely state what you expected as compared to the actual behavior you're seeing.
  - Include only those details that apply to the issue.
  - Be concise, but include details important for helping us in understanding the problem and finding the root cause.
  - **State the version** you are testing, which browser you are using, and on **which device**.
    - If it is possible to indicate what you've seen in other browser and device combinations, that is even better! For example, does the issue occur in all browsers, or just one browser on one particular operating system? (For example, "only in Firefox on Windows 10.)
  - If possible, include *the last version where the bug was not present*.
  - If the bug is more visual, please **attach a screenshot** and mark up the problem.
  - Provide a **step-by-step instructions for reproducing the issue** with an example,
  - Generally, provide as much detail as necessary, but balance our need for information with how obvious the problem is.
  - Please report issues in English.
- Use our [issue template]().
  - **Do not include more than one bug per issue created**. This helps us to analyze bugs more easily.

### About Reporting Security Issues

If you find a **security issue**, we'd rather you tell us **directly** instead of creating a public issue. *This way we can fix it before it can be exploited*.

### Issue Reporting Disclaimer

Feedback, especially bug reports, are always welcome. However, our capacity as a team is limited -- we cannot answer specific project or consultation requests, nor can we invest time in fleshing out what might be a bug. Because of this, we reserve the right to close or not process issue reports that do not contain enough information. We also do not guarantee that every well-documented issue will be fixed.

That being said, we will try our very best to ensure the ```url-storefront``` codebase is of high quality.

## Contributor License Agreement

When you contribute anything to ```url-storefront``` (code, documentation, analysis, anything), be aware that your contribution is covered by the same [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0) that is applied to ```url-storefront``` itself.

This applies to all contributors, including those contributing on behalf of a company.

## Contribution Content Guidelines

A contribution will be considered for inclusion in ```url-storefront``` if it meets the following criteria:

- The contribution fits the overall vision and direction of ```url-storefront```
- The contribution truly improves the storefront
- The contribution follows the applicable guidelines and standards.
  - The "guidelines and standards" requirement could fill entire books and still lack a 100% clear definition, but rest assured that you will receive feedback if something is not right.

## Contribution Process

Following is a summary of the Contribution Process we support:

1. Make sure the change would be welcome, as described above.
2. Create a fork of the ```url-storefront``` library sources.
3. Build and run the storefront from the library development workspace. For more information, see Contributor Setup.
4. Work on the change in your fork (on a feature branch).
5. Commit and push your changes using the [squash and merge](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) feature in GitHub.
   1. You should also use the squash and merge feature when additional changes are required after code review.
6. In the commit message, please follow the conventions described by [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. Check out ```Commit messages``` section below for more information.
   1. make sure issue number is included ([like so](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#commit-message-for-a-fix-using-an-optional-issue-number)) in your commit message.
7. Create a **pull request** so that we can review your change.
8. Wait for our **code review and approval**, possibly enhancing your change on request.
   1. Note: This may take time, depending on the required effort for reviewing, testing, and clarification. Our developers are also working their regular duties.
9. After the change has been approved, we will inform you in a comment.
10. We will close the pull request. At that point, you can delete your branch.

We look forward to hearing from you!

## Commit messages

The application is configured to follow the [Conventional Commits Convention](https://www.conventionalcommits.org/en/v1.0.0/). So in order to be able to commit your changes, make sure your commit messages are properly formatted, otherwise you won't be able to commit. Due to standardized Commit Messages we are able to use tools like *[standard-version](https://github.com/conventional-changelog/standard-version)* to automatically generate changelogs.

## Releasing

Once agregated commits are there we will publish a new relase of the project.

Releasing new version is done by executing ```yarn release``` (alternatively ```npm run release```), which effectively generates the **Changelog.md** file content, updates **package.json** version and adds those changes as a commit (chore(release): x.x.x) to the repository and pushes the changes to the remote.
