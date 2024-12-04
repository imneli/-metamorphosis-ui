import React from 'react';
import { InputTest } from '@/tests/components/Input.test';
import { Badge } from '@/tests/components/Badge.test';

export default function ComponentsTest() {

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className='text-3xl'>Hello World!</h1>
      <div className='max-w-xl p-4'>
      <InputTest
        className=''
        variant={'default'}
        label='Nome'
      />
      </div>
      <div className='p-2 bg-slate-500 flex flex-col max-w-36 gap-2'>
        <Badge 
        variant='outline'
        color={'black'}
        size={'md'}
        >hello world</Badge>
        <Badge 
        color={'danger'}
        size={'md'}
        >hello world</Badge>
        <Badge 
        variant='solid'
        color={'violet'}
        size={'md'}
        >hello world</Badge>
        <Badge 
        color={'success'}
        size={'md'}
        >hello world</Badge>
        <Badge>hello world</Badge>
        <Badge
        color={'warning'}
        >hello world</Badge>
      </div>
    </div>
  );
}