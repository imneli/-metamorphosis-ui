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
      <div className='p-2 bg-slate-500'>
        <Badge 
        variant='outline'
        color={'black'}
        size={'md'}
        
        >hello world</Badge>
      </div>
    </div>
  );
}