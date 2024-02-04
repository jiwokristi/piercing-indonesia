import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'

import { Button } from '@/components/button'
import { Input, Checkbox } from '@/components/input'
import { Calendar } from '@/components/Calendar'
import { Modal } from '@/components/Modal'
import { ArrowUpIcon } from '@/components/icons'

import { SignInValues, signInSchema } from '@/utils/validations/sign-in'

export const SignInForm = () => {
  const [open, setOpen] = useState(false)
  const [unhide, setUnhide] = useState(false)

  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
  })
  const { register, getValues, setValue, handleSubmit } = form

  const submitHandler = (values: SignInValues) => {
    const payload = signInSchema.parse(values)
    console.log('parse', payload)
  }

  return (
    <form
      noValidate
      className="flex flex-col pb-64"
      onSubmit={handleSubmit(submitHandler)}
    >
      <Modal open={open} onClose={() => setOpen(false)}>
        <Calendar
          form={form}
          fieldName="dob"
          onClose={() => setOpen(false)}
          maxDate={new Date()}
        />
      </Modal>

      <Checkbox
        {...register('isNewUser')}
        label="MAKE ME A NEW ACCOUNT"
        direction="row-reverse"
        containerClasses="px-16 mb-8"
        onChange={(e) => {
          setUnhide((prev) => !prev)
          setValue('isNewUser', e.target.checked, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
          })
        }}
      />
      {unhide && (
        <>
          <Input
            {...register('name')}
            required
            variant="plain-white"
            type="text"
            placeholder="NAME..."
            size="xl"
            classes="uppercase"
            onChange={(e) => {
              setValue('name', e.target.value, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
              })
            }}
          />
          <button onClick={() => setOpen((prev) => !prev)}>
            <Input
              required
              variant="plain-white"
              type="text"
              placeholder={
                getValues('dob')
                  ? dayjs(getValues('dob')).format('D MMMM YYYY')
                  : 'DATE OF BIRTH...'
              }
              size="xl"
              classes="uppercase"
              readOnly
            />
          </button>
        </>
      )}
      <Input
        {...register('email')}
        required
        variant="plain-white"
        type="email"
        placeholder="EMAIL..."
        size="xl"
        classes="uppercase"
        onChange={(e) => {
          setValue('email', e.target.value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
          })
        }}
      />
      <Input
        {...register('password')}
        required
        variant="plain-white"
        type="password"
        placeholder="PASSWORD..."
        size="xl"
        onChange={(e) => {
          setValue('password', e.target.value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
          })
        }}
      />
      <Button variant="solid-gray" size="xl" flex="row">
        <div className="relative flex w-fit overflow-hidden">
          <span>SIGN IN</span>
          <div className="flex flex-row-reverse h-fit translate-y-12 -translate-x-32 -rotate-45">
            <ArrowUpIcon
              width={36}
              height={36}
              classes="!text-almost-white-1 rotate-90 min-w-max transition-all ease-in-out duration-300 group-hover:translate-x-full group-hover:opacity-0"
            />
            <ArrowUpIcon
              width={36}
              height={36}
              classes="!text-almost-white-1 rotate-90 min-w-max opacity-0 transition-all ease-in-out duration-300 group-hover:translate-x-full group-hover:opacity-100"
            />
          </div>
        </div>
      </Button>
    </form>
  )
}
