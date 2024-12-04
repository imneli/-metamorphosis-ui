import React from 'react';
import { Button } from '@/ui/components/Button';

export default function ComponentsTest() {
  return (
    <div className="p-8 bg-gray-100 space-y-4">
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
        <Button variant="neutral" outline="black">Black</Button>
      </div>
      
      <div className="space-x-2">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
      
      <div className="space-x-2">
        <Button radius="none">No Radius</Button>
        <Button radius="sm">Small Radius</Button>
        <Button radius="md">Medium Radius</Button>
        <Button radius="lg">Large Radius</Button>
        <Button radius="full">Full Radius</Button>
      </div>
    </div>
  );
}