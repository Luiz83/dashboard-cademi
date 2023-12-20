import { UserDto } from '@src/models/UserDto'

export interface getUserResponse {
  success: boolean
  code: number
  data: Data
  profiler?: Profiler
}

export interface Data {
  paginator: Paginator
  usuario: UserDto[]
}

export interface Paginator {
  perPage: number
  next_page_url: string | null
  prev_page_url: string | null
}

export interface Profiler {
  start: number
  finish: number
  process: number
}