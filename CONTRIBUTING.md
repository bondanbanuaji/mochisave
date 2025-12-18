# Contributing to MochiSave

First off, thank you for considering contributing to MochiSave! It's people like you that make MochiSave such a great tool.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/mochisave.git
   cd mochisave
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Setup environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

5. **Setup database**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

## 🔄 Development Process

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Adding tests

Example: `feature/add-pinterest-support`

### Making Changes

1. Create a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes
3. Test your changes thoroughly
4. Commit your changes (see commit guidelines)
5. Push to your fork
6. Open a Pull Request

## 📤 Pull Request Process

1. **Update documentation** - If you've added new features, update the README.md
2. **Add tests** - Add tests for new features when applicable
3. **Follow code style** - Ensure your code follows our coding standards
4. **Update CHANGELOG** - Add your changes to CHANGELOG.md
5. **One feature per PR** - Keep PRs focused on a single feature or fix
6. **Descriptive PR title** - Use clear, descriptive titles

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where needed
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests
```

## 💻 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types, avoid `any`
- Use interfaces for object shapes
- Export types when needed

```typescript
// Good
interface DownloadOptions {
  quality: string
  format: string
}

// Avoid
const download = (options: any) => { }
```

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use descriptive component names
- Props should be typed

```typescript
// Good
interface ButtonProps {
  onClick: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ onClick, children, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick} className={variant}>{children}</button>
}
```

### File Organization

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable components
│   ├── ui/          # Basic UI components
│   ├── layout/      # Layout components
│   └── features/    # Feature-specific components
├── lib/             # Utilities and helpers
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
└── styles/          # Global styles
```

### Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `DownloadForm.tsx`)
- **Utilities**: camelCase (`formatDate.ts`, `validators.ts`)
- **Hooks**: camelCase with `use` prefix (`useDownload.ts`)
- **Constants**: UPPERCASE (`API_URL`, `MAX_FILE_SIZE`)

### CSS/Styling

- Use Tailwind CSS utility classes
- Use DaisyUI components when available
- Keep custom CSS minimal
- Use `clsx` for conditional classes

```tsx
// Good
<button className={clsx('btn', variant === 'primary' && 'btn-primary')}>
  Click me
</button>
```

## 📝 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(download): add Instagram Reels support

Implemented scraper for Instagram Reels with HD quality support.
Includes tests and documentation updates.

Closes #123
```

```bash
fix(api): resolve rate limiting issue

Fixed bug where rate limit was not being properly checked
for authenticated users.

Fixes #456
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test
npm test -- DownloadForm.test.tsx
```

### Writing Tests

- Write tests for new features
- Test edge cases
- Use descriptive test names

```typescript
describe('DownloadForm', () => {
  it('should validate URL format', () => {
    // Test implementation
  })

  it('should detect platform from URL', () => {
    // Test implementation
  })
})
```

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
**Describe the bug**
A clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 95]
- Version: [e.g., 1.0.0]
```

## 💡 Feature Requests

We love feature requests! Please provide:

- **Clear description** of the feature
- **Use case** - Why is this needed?
- **Examples** - How would it work?
- **Alternative solutions** - Have you considered other approaches?

## ❓ Questions?

- Check existing [Issues](https://github.com/yourusername/mochisave/issues)
- Ask in [Discussions](https://github.com/yourusername/mochisave/discussions)
- Email us at dev@mochisave.com

## 🎉 Recognition

Contributors will be added to our README.md and receive special badges!

---

**Thank you for contributing to MochiSave! 🍡**
