import React from 'react';
import { Button } from '@/ui/components/Button';

export default function ComponentsTest() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Componentes UI</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Botões</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button size="sm">Botão Pequeno</Button>
            <Button>Botão Médio</Button>
            <Button size="lg">Botão Grande</Button>
          </div>
          
          <div className="flex gap-4">
            <Button variant="primary">primary color</Button>
            <Button variant="secondary">secondary color</Button>
          </div>
        </div>
      </section>
    </div>
  );
}