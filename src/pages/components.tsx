import React from 'react';
import { Button } from '@/ui/components/Button';
import { HeaderOne } from '@/ui/components/Headers/HeaderOne';
import { Input } from '@/ui/components/Input';
import { Cta } from '@/ui/components/Cta';
import { FiMail, FiLock, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { TextAreaTest } from '@/tests/components/TextArea.test';
import { Checkbox } from '@/ui/components/Checkbox';
import { LabelTest } from '@/tests/components/Label.test';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/ui/components/Card";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/tests/components/Accordion.test';

export default function Components() {
  

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
            <Cta platform="instagram" href="https://x.com" order={2} size="lg" />
            <Cta platform="whatsapp" href="https://x.com" order={1} size="lg" />
            <Cta platform="twitter" href="https://x.com" order={3} size="lg" />
        </div>
        <div className='max-w-lg'>
        <h2 className="text-2xl font-bold mb-4">Inputs</h2>
          <Input 
            label="Default Input"
            placeholder="Type something..."
          />

          <Input 
            label="Email"
            type="email"
            placeholder="Enter your email"
            startIcon={<FiMail />}
          />

          <Input 
            label="Password"
            type="password"
            placeholder="Enter your password"
            startIcon={<FiLock />}
            helperText="Must be at least 8 characters"
          />

          <Input 
            label="Error Input"
            value="invalid@email"
            error="Invalid email address"
            startIcon={<FiMail />}
            endIcon={<FiAlertCircle />}
          />

          <Input 
            label="Success Input"
            value="valid@email.com"
            success="Email is available"
            startIcon={<FiMail />}
            endIcon={<FiCheck />}
          />


          <Input 
            label="Small Input"
            size="sm"
            placeholder="Small input"
          />

          <Input 
            label="Large Input"
            size="lg"
            placeholder="Large input"
          />

          <Input 
            label="Disabled Input"
            disabled
            placeholder="Disabled input"
          />

          <LabelTest>test 1</LabelTest>
          <TextAreaTest 
          placeholder='teste place' 
          helperText='Teste helper'
          label='Teste label'
           />

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description here</CardDescription>
            </CardHeader>
            <CardContent>
              main content
            </CardContent>
            <CardFooter>
              Footer content
            </CardFooter>
          </Card>
        </div>

        <Accordion>
          <AccordionItem value="item-1">
            <AccordionTrigger icon="plus">With plus/minus icon</AccordionTrigger>
            <AccordionContent>Content here</AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger icon="arrow">With arrow icon</AccordionTrigger>
            <AccordionContent>Content here</AccordionContent>
          </AccordionItem>
        </Accordion>
        <AccordionItem value="item-3">
            <AccordionTrigger icon='chevron'>With chevron icon</AccordionTrigger>
            <AccordionContent>Content here</AccordionContent>
          </AccordionItem>

        <div className="space-y-2">
          <Checkbox id="terms" />
        </div>
        </div>
    </div>
  );
}