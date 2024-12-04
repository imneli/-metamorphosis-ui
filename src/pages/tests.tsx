import React from 'react';
import { InputTest } from '@/tests/components/Input.test';
import { BadgeTest } from '@/tests/components/Badge.test';
import { Separator } from '@/tests/components/Separator.test';

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
      <div className='p-2 bg-white flex flex-col max-w-36 gap-2'>
        <BadgeTest 
        color={'black'}
        size={'md'}
        >test separator</BadgeTest>
        <BadgeTest 
        variant='glass'
        color={'danger'}
        size={'md'}
        >hello world</BadgeTest>
        <BadgeTest 
        variant='solid'
        color={'violet'}
        size={'md'}
        >hello world</BadgeTest>
        <BadgeTest 
        color={'success'}
        size={'md'}
        >hello world</BadgeTest>
        <BadgeTest>hello world</BadgeTest>
        <BadgeTest>hello world</BadgeTest>
      </div>
      <Separator orientation='horizontal'/>
    </div>
  );
}