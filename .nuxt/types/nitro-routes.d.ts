// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/calendar/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/calendar/[id]').default>>>>
    }
    '/api/calendar': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/calendar/index.get').default>>>>
    }
    '/api/calendar/team/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/calendar/team/[id]').default>>>>
    }
    '/api/championship/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/championship/[id]').default>>>>
    }
    '/api/championship': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/championship/index.get').default>>>>
    }
    '/api/player/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/[id]').default>>>>
    }
    '/api/player/A': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/A/index.get').default>>>>
    }
    '/api/player/A/slot/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/A/slot/[id]').default>>>>
    }
    '/api/player/C': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/C/index.get').default>>>>
    }
    '/api/player/C/slot/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/C/slot/[id]').default>>>>
    }
    '/api/player/D': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/D/index.get').default>>>>
    }
    '/api/player/D/slot/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/D/slot/[id]').default>>>>
    }
    '/api/player': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/index.get').default>>>>
    }
    '/api/player/P': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/P/index.get').default>>>>
    }
    '/api/player/P/slot/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/player/P/slot/[id]').default>>>>
    }
    '/api/squad/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/squad/[id]').default>>>>
    }
    '/api/team/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/team/[id]').default>>>>
    }
    '/api/team': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/team/index.get').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_supabase/session': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/supabase/dist/runtime/server/api/session').default>>>>
    }
  }
}
export {}