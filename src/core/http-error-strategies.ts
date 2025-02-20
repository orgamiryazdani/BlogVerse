import {
    ApiError,
    BadRequestError,
    NetworkError,
    NotFoundError,
    UnauthorizedError,
    UnhandledException,
    ValidationError,
} from '@/types/http-errors.interface'

export type ApiErrorHandler = (errorData: ApiError) => void

export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
    throw {
        ...errorData,
    } as BadRequestError
}

export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
    throw { ...errorData } as ValidationError
}

export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
    throw { ...errorData, message: 'The desired service was not found' } as NotFoundError
}

export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
    throw {
        ...errorData,
        message: 'Access to the desired service is not possible',
    } as UnauthorizedError
}

export const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
    throw { ...errorData, message: 'Server error' } as UnhandledException
}

export const networkErrorStrategy = () => {
    throw { message: 'Network error' } as NetworkError
}

export const errorHandler: Record<number, ApiErrorHandler> = {
    400: (errorData) => (errorData.errors ? validationErrorStrategy : badRequestErrorStrategy)(errorData),
    403: unauthorizedErrorStrategy,
    404: notFoundErrorStrategy,
    500: unhandledExceptionStrategy,
}
