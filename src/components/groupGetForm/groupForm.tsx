import { IForm } from '@/modules/repositories/form/form'
import { createForm } from '@/validations'
import GroupFromInput from '@components/input/InputField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export default function GetInTouchForm() {
  const form = useForm<IForm>({
    defaultValues: {
      email: '',
      name: '',
      phone: 0,
      enquiry: '',
    },
    resolver: yupResolver(
      createForm({
        email: 'Please enter email',
        name: 'Please enter name',
        enquiry: 'Please enter subject',
        phone: 'Phone number is required',
      })
    ),
  })

  const handleSubmit = async (values: any) => {
    console.log(values)
    alert(`thank you ${values.name} for your message`)
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <GroupFromInput
          placeholder="email"
          form={form}
          name="email"
          formLabel="email"
          iconAfter={<i className="fas fa-user"></i>}
        />
        <GroupFromInput
          placeholder="name"
          form={form}
          name="name"
          formLabel="name"
          iconAfter={<i className="fas fa-user"></i>}
        />
        <GroupFromInput
          placeholder="enquiry"
          form={form}
          name="enquiry"
          formLabel="enquiry"
          iconAfter={<i className="fas fa-user"></i>}
        />
        <div>
          <button onClick={form.handleSubmit(handleSubmit)}>Submit</button>
        </div>
      </form>
    </div>
  )
}
