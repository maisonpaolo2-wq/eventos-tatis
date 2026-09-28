'use client'

import { useState, type FormEvent } from 'react'

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'No se pudo enviar')
      // Navegación completa: la página de gracias siempre empieza arriba
      window.location.assign('/gracias')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'No se pudo enviar')
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Tu nombre</label>
          <input id="name" name="name" autoComplete="name" required minLength={2} />
        </div>
        <div className="field">
          <label htmlFor="phone">Teléfono</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="eventType">Qué celebras</label>
          <select id="eventType" name="eventType" defaultValue="Cumpleaños">
            <option>Cumpleaños</option>
            <option>Comunión</option>
            <option>Spa Tati&apos;s</option>
            <option>Boda</option>
            <option>Bautizo o revelación</option>
            <option>Otro evento</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="date">Fecha aproximada</label>
          <input id="date" name="date" placeholder="Ej. 14 de mayo" />
        </div>
      </div>
      {!compact && (
        <div className="form__row">
          <div className="field">
            <label htmlFor="age">Edad del peque</label>
            <input id="age" name="age" placeholder="Ej. cumple 6" />
          </div>
          <div className="field">
            <label htmlFor="guests">Nº de niños o invitados</label>
            <input id="guests" name="guests" inputMode="numeric" placeholder="Ej. 20" />
          </div>
        </div>
      )}
      <div className="field">
        <label htmlFor="message">Cuéntanos la idea, el lugar o la temática</label>
        <textarea id="message" name="message" rows={compact ? 3 : 5} />
      </div>
      <input className="hp" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="check">
        <input type="checkbox" name="privacy" required />
        <span>Acepto que Eventos Tati&apos;s use estos datos solo para responder a mi consulta.</span>
      </label>
      {status === 'error' && (
        <p className="form__error" role="alert">
          {error}. También puedes escribirnos por WhatsApp.
        </p>
      )}
      <div>
        <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Pedir propuesta'}
        </button>
      </div>
    </form>
  )
}
