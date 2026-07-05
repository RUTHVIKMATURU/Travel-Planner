# Travix Architecture Guide

## 🏗️ Project Structure

This document outlines the scalable folder architecture for Travix, a production-ready AI travel planner built with Next.js 16, TypeScript, and modern development practices.

## 📁 Folder Structure

```
ai-travel-planner/
├── actions/                 # Server Actions for form handling & mutations
│   ├── index.ts            # Barrel exports
│   ├── auth-actions.ts     # Authentication actions (placeholder)
│   ├── trip-actions.ts     # Trip CRUD operations
│   └── profile-actions.ts  # User profile management
│
├── app/                     # Next.js App Router pages
│   ├── (auth)/             # Auth route group
│   ├── (dashboard)/        # Protected dashboard routes
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Landing page
│
├── auth/                    # Authentication configuration (empty - ready for implementation)
│   ├── auth.ts             # Auth.js configuration
│   ├── config.ts           # Auth provider configs
│   └── provider.ts         # Custom auth providers
│
├── components/              # React components
│   ├── common/             # Shared components
│   ├── dashboard/          # Dashboard-specific components
│   ├── footer/             # Footer components
│   ├── home/               # Landing page components
│   ├── navbar/             # Navigation components
│   ├── trip/               # Trip-related components
│   └── ui/                 # shadcn/ui components
│
├── constants/               # Application constants
│   ├── design.ts           # Design system constants
│   ├── destinations.ts     # Sample destinations
│   ├── faqs.ts             # FAQ data
│   ├── features.ts         # Feature descriptions
│   ├── howItWorks.ts       # Process steps
│   ├── motion.ts           # Animation configurations
│   ├── navigation.ts       # Navigation links
│   └── testimonials.ts     # User testimonials
│
├── hooks/                   # Custom React hooks
│   ├── index.ts            # Barrel exports
│   ├── use-local-storage.ts # localStorage hook
│   ├── use-debounce.ts     # Debouncing utility
│   ├── use-toast-action.ts # Server Action toast integration
│   └── use-media-query.ts  # Responsive design hooks
│
├── lib/                     # Core utilities and configurations
│   ├── validations/        # Zod schemas
│   │   ├── index.ts        # Barrel exports
│   │   ├── auth.ts         # Authentication validation
│   │   ├── trip.ts         # Trip validation
│   │   └── profile.ts      # Profile validation
│   ├── generated/          # Prisma generated files
│   ├── constants.ts        # App-wide constants
│   ├── design.ts           # Design system utilities
│   ├── errors.ts           # Error handling utilities
│   ├── format.ts           # Formatting utilities
│   ├── prisma.ts           # Database client
│   └── utils.ts            # General utilities
│
├── providers/               # React context providers
│   ├── index.ts            # Barrel exports
│   ├── ThemeProvider.tsx   # Theme management
│   ├── ToasterProvider.tsx # Toast notifications
│   └── QueryProvider.tsx   # Client queries (placeholder)
│
├── services/                # Business logic layer
│   ├── index.ts            # Barrel exports
│   ├── user-service.ts     # User operations
│   ├── trip-service.ts     # Trip operations
│   └── ai-service.ts       # AI integration
│
├── types/                   # TypeScript type definitions
│   ├── index.ts            # Barrel exports
│   ├── user.ts             # User domain types
│   ├── trip.ts             # Trip domain types
│   ├── ai.ts               # AI integration types
│   └── common.ts           # Shared utility types
│
└── prisma/                  # Database schema and migrations
    └── schema.prisma       # Database schema
```

## 🎯 Folder Explanations

### `/actions` - Server Actions
**Purpose**: Handle form submissions and data mutations using Next.js Server Actions.

- **Why**: Server Actions provide type-safe, progressive enhancement for forms
- **Best Practices**: 
  - Always validate input with Zod schemas
  - Use `withActionError` wrapper for consistent error handling
  - Revalidate relevant paths after mutations
  - Return `ActionResult<T>` type for consistent responses

### `/auth` - Authentication (Ready for Implementation)
**Purpose**: Authentication configuration and providers (currently empty as requested).

- **Why**: Centralized auth config when you're ready to implement
- **Future Use**: Auth.js configuration, custom providers, middleware

### `/hooks` - Custom React Hooks
**Purpose**: Reusable client-side logic and state management.

- **Key Hooks**:
  - `useLocalStorage`: Persistent client state
  - `useDebounce`: Performance optimization for inputs
  - `useToastAction`: Server Action integration with toast feedback
  - `useMediaQuery`: Responsive design utilities

### `/lib` - Core Utilities
**Purpose**: Essential utilities, configurations, and shared logic.

- **Key Files**:
  - `utils.ts`: General utilities (cn, sleep, truncate, etc.)
  - `errors.ts`: Error handling classes and utilities
  - `format.ts`: Date, currency, and number formatting
  - `constants.ts`: App-wide constants and routes
  - `validations/`: Zod schemas for type-safe validation

### `/providers` - React Context Providers
**Purpose**: App-wide context and configuration providers.

- **Current Providers**:
  - `ThemeProvider`: Dark/light theme management
  - `ToasterProvider`: Toast notification system
  - `QueryProvider`: Placeholder for future client queries

### `/services` - Business Logic Layer
**Purpose**: Encapsulate business logic and external integrations.

- **Benefits**:
  - Separation of concerns from UI components
  - Reusable across Server Actions and API routes
  - Easier testing and mocking
  - Consistent error handling

### `/types` - TypeScript Definitions
**Purpose**: Centralized type definitions for the entire application.

- **Organization**:
  - Domain types (User, Trip, AI)
  - Utility types (ActionResult, PaginatedResult)
  - API types and interfaces
  - Barrel exports for easy importing

## 🚀 Key Features

### Type Safety
- Comprehensive TypeScript coverage
- Zod schema validation
- Type-safe Server Actions
- Prisma type generation

### Developer Experience
- Barrel exports for clean imports
- Consistent error handling
- Built-in formatting utilities
- Responsive design hooks

### Scalability
- Modular folder structure
- Service layer abstraction
- Reusable components and utilities
- Clear separation of concerns

### Performance
- Server Components by default
- Optimized database queries
- Debounced inputs
- Progressive enhancement

## 📝 Usage Examples

### Importing Types
```typescript
import type { Trip, User, ActionResult } from "@/types";
```

### Using Services
```typescript
import { tripService } from "@/services";
const trips = await tripService.findByUser(userId);
```

### Server Actions
```typescript
import { createTripAction } from "@/actions";
// Use in forms with progressive enhancement
```

### Custom Hooks
```typescript
import { useToastAction, useDebounce } from "@/hooks";
const { execute, isPending } = useToastAction();
```

## 🔄 Next Steps

1. **Implement Authentication**: Populate the `/auth` folder when ready
2. **Add More Services**: Extend services for additional business logic
3. **Enhance Types**: Add more domain-specific types as features grow
4. **Create Components**: Build reusable UI components in organized folders
5. **Database Migrations**: Run Prisma migrations for the updated schema

This architecture provides a solid foundation for scaling Travix while maintaining code quality and developer productivity.