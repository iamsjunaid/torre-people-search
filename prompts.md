# AI Prompts Log for Torre Engineering Technical Assessment

Below are the prompts used during the development of this project, as per the deliverable requirements. All prompts were executed using **Cursor AI Assistant** with **Model: Claude Sonnet**.

---

## 1. Initial Setup - Tailwind CSS Configuration Issue

**Tool**: Cursor AI Assistant  
**Model**: Claude Sonnet  
**Prompt**:

> why tailwind is not applied?

**Context**: The user was facing issues with Tailwind CSS not being applied to their React components. The problem was identified as using Tailwind CSS v4.1.11 (beta version) with v3 configuration format.

**Solution**: Downgraded to Tailwind CSS v3.4.0, created PostCSS configuration, and updated the Tailwind config to use the correct v3 format.

---

## 2. Handle streaming JSON response from Torre's `_searchStream` endpoint

**Tool**: ChatGPT  
**Model**: GPT-4o  
**Prompt**:

> Torre's `/entities/_searchStream` endpoint returns a streaming JSON response. How do I read the full stream and convert it to an array of objects using fetch in JavaScript?

**Context**: The Torre API returns a streaming JSON response that needs to be properly parsed and converted to an array of person objects.

**Solution**: Implemented proper stream handling to read the full response and parse it into an array of person objects for display.

---

## 3. Git Repository Issues

**Tool**: Cursor AI Assistant  
**Model**: Claude Sonnet  
**Prompt**:

> facing issues while pushing to main branch of git

**Context**: The user was getting "src refspec main does not match any" error when trying to push to the main branch.

**Solution**: The issue was that the main branch didn't exist locally yet. The user needed to make an initial commit before pushing.

---

## 4. Node.js Server Module Import Error

**Tool**: Cursor AI Assistant  
**Model**: Claude Sonnet  
**Prompt**:

> fix the issue with node-fetch in server/index.js

**Context**: The server was using `node-fetch` v3.3.2 (ES module) with CommonJS `require()` syntax, causing `ERR_REQUIRE_ESM` error.

**Solution**: Added `"type": "module"` to package.json and converted all `require()` statements to `import` statements.

---

## 5. Fix CORS error for genome API

**Tool**: ChatGPT  
**Model**: GPT-4o  
**Prompt**:

> I'm getting a CORS error when calling `https://torre.ai/api/genome/bios/:username` from my React frontend (localhost:5173). How can I proxy this API using a small Node.js server to bypass CORS?

**Context**: The Torre Genome API has CORS restrictions that prevent direct calls from the frontend.

**Solution**: Created a Node.js proxy server to handle the API calls and bypass CORS restrictions.

---

## 6. TypeScript Type Safety Improvements

**Tool**: Cursor AI Assistant  
**Model**: Claude Sonnet  
**Prompt**:

> For the code present, we get this error: "Unexpected any. Specify a different type." How can I resolve this? If you propose a fix, please make it concise.

**Context**: The ProfileModal component was using `any` types which TypeScript linter flagged as errors.

**Solution**: Created proper TypeScript interfaces (`Person`, `Strength`, `Education`, `PersonData`) based on the actual API response structure to replace all `any` types.

---

## 7. Modal Scrolling Issue

**Tool**: Cursor AI Assistant  
**Model**: Claude Sonnet  
**Prompt**:

> i cannot scroll the modal

**Context**: The modal content was taller than the viewport but had no scroll mechanism.

**Solution**: Added `overflow-y-auto` to both outer container and modal content, with proper height constraints and spacing.

---

## Technical Challenges Solved:

1. **Tailwind CSS Configuration**: Fixed version compatibility issues
2. **API Integration**: Successfully integrated with Torre People Search and Genome APIs
3. **Streaming Data Handling**: Properly parsed streaming JSON responses
4. **CORS Issues**: Implemented proxy server to bypass CORS restrictions
5. **Git Repository Setup**: Resolved branch and commit issues
6. **Node.js ES Modules**: Fixed module import/export compatibility
7. **TypeScript Type Safety**: Replaced `any` types with proper interfaces
8. **UI/UX Design**: Implemented mobile-first, modern design patterns
9. **Component Architecture**: Built reusable, well-typed React components
10. **Responsive Design**: Created consistent mobile-first layouts

---

## Key Technologies Used:

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, CORS
- **APIs**: Torre People Search API, Torre Genome API
- **Development**: Vite, ESLint, Git
