# Components Documentation

## Table of Contents

- [Button](#button)
- [Input](#input)
- [Badge](#badge)
- [Separator](#separator)
- [HeaderOne](#headerone)
- [Cta](#cta)

## Button

A versatile button component with multiple variants, colors, and sizes.

```tsx
import { Button } from 'metamorphosis-ui';

// Basic usage
<Button>Click me</Button>

// Variants
<Button variant="solid" color="primary">Primary</Button>
<Button variant="outline" color="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Colors
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="danger">Danger</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>

// Sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// States
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>
```

## Input

A flexible input component with various states, icons, and validation styles.

```tsx
import { Input } from 'metamorphosis-ui';
import { FiMail, FiLock } from 'react-icons/fi';

// Basic usage
<Input placeholder="Type something..." />

// With label and icons
<Input 
  label="Email"
  startIcon={<FiMail />}
  placeholder="Enter your email"
/>

// Validation states
<Input 
  label="Email"
  error="Invalid email address"
  startIcon={<FiMail />}
/>

<Input 
  label="Email"
  success="Email is available"
  startIcon={<FiMail />}
/>

// Sizes
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />```

## HeaderOne

```tsx 
import { HeaderOne, Button } from 'metamorphosis-ui';

const navigation = [
  <a href="#" key="home">Home</a>,
  <a href="#" key="about">About</a>,
  <a href="#" key="services">Services</a>,
];

const actions = [
  <Button key="login" variant="outline" color="primary" size="sm">
    Login
  </Button>,
  <Button key="signup" variant="solid" color="primary" size="sm">
    Sign Up
  </Button>,
];

<HeaderOne
  logo={<span className="text-xl font-bold">Logo</span>}
  navigation={navigation}
  actions={actions}
  position="sticky"
  maxWidth="2xl"
/>
```

## Header

A responsive navigation header component with customizable content.

```tsx
import { HeaderOne, Button } from 'metamorphosis-ui';

const navigation = [
  <a href="#" key="home">Home</a>,
  <a href="#" key="about">About</a>,
  <a href="#" key="services">Services</a>,
];

const actions = [
  <Button key="login" variant="outline" color="primary" size="sm">
    Login
  </Button>,
  <Button key="signup" variant="solid" color="primary" size="sm">
    Sign Up
  </Button>,
];

<HeaderOne
  logo={<span className="text-xl font-bold">Logo</span>}
  navigation={navigation}
  actions={actions}
  position="sticky"
  maxWidth="2xl"
/>
```

## Cta (Call to Action)

Social media floating action buttons with customizable positions

```tsx
import { Cta } from 'metamorphosis-ui';

<Cta platform="instagram" href="https://instagram.com/your-profile" order={1} size="lg" />
<Cta platform="whatsapp" href="https://wa.me/your-number" order={2} size="lg" />
<Cta platform="twitter" href="https://twitter.com/your-profile" order={3} size="lg" />
<Cta platform="discord" href="https://discord.gg/your-server" order={4} size="lg" />
```

## Badge

Status indicators and labels with various styles.

```tsx
import { Badge } from 'metamorphosis-ui';

// Variants
<Badge variant="solid">Solid</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="glass">Glass</Badge>

// Colors
<Badge color="default">Default</Badge>
<Badge color="black">Black</Badge>
```

## Separator

A flexible separator component for visual separation of content.

```tsx
import { Separator } from 'metamorphosis-ui';

// Basic usage
<Separator />

// Orientations
<Separator orientation="horizontal" />
<Separator orientation="vertical" />

// Custom styles
<Separator className="my-4 bg-gray-200" />
<Separator orientation="vertical" className="mx-2 h-6" />
```