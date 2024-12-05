"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  message: z.string().min(10, 'Mensagem muito curta')
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Sending form data:', data);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Nova Mensagem de Contato',
          html: `
            <h2>Nova Mensagem de Contato</h2>
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Telefone:</strong> ${data.phone}</p>
            <p><strong>Mensagem:</strong> ${data.message}</p>
          `
        })
      });

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
      } else {
        console.error('Erro ao enviar mensagem:', responseData);
        setSubmitStatus('error');
        toast({
          title: "Erro ao enviar mensagem",
          description: responseData.error?.details || responseData.error?.message || 'Tente novamente mais tarde',
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Erro de rede ou inesperado:', error);
      setSubmitStatus('error');
      toast({
        title: "Erro ao enviar mensagem",
        description: error instanceof Error ? error.message : 'Verifique sua conexão e tente novamente',
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input 
          type="text" 
          placeholder="Nome Completo" 
          {...register('name')}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <Input 
          type="email" 
          placeholder="Seu Email" 
          {...register('email')}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <Input 
          type="tel" 
          placeholder="Seu Telefone" 
          {...register('phone')}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <Textarea 
          placeholder="Sua Mensagem" 
          {...register('message')}
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>

      {submitStatus === 'success' && (
        <p className="text-green-500">Mensagem enviada com sucesso!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500">Erro ao enviar mensagem. Tente novamente.</p>
      )}
    </form>
  );
}