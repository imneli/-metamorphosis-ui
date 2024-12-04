import React from 'react';
import { Button } from '@/ui/components/Button';
import { HeaderOne } from '@/ui/components/Headers/HeaderOne';
import { Cta, CtaContainer } from '@/ui/components/Cta'

export default function ComponentsTest() {
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

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderOne
        logo={<span className="text-xl font-bold">Logo</span>}
        navigation={navigation}
        actions={actions}
        position="sticky"
        maxWidth="2xl"
      />

      <div className="p-8 space-y-8">
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        
        <div className="space-x-2">
          <Button>Default Button</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="danger">Danger</Button>
          <Button color="success">Success</Button>
        </div>
        
        <div className="space-x-2">
          <Button variant="outline">Outline Default</Button>
          <Button variant="outline" color="secondary">Outline Secondary</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
        
        <div className="space-x-2">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>

        <div className="space-x-2">
            <Cta platform="twitter" href="#" order={1} size="lg" />
            <Cta platform="instagram" href="#" order={2} size="lg" />
        </div>
      </div>
    </div>
  );
}