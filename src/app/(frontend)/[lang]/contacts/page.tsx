import { queryPageBySlug } from '@/utilities/queryPageBySlug'
import { RouteButton } from '@/components/RouteButton'
import { PhoneNumber } from '@/components/PhoneNumber'
import { Map } from '@/components/Map'
import { getDictionary } from '@/dictionaries/dictionaries'
import { DictionariesType } from '@/dictionaries/dictionariesType'
type Props = {
  params: Promise<{ lang: 'uk' | 'en' }>
}
type WorkSchedule = {
  title: string
  workTime: Record<string, string>
}
interface ContactsBlock {
  blockType: 'contacts'
  phone: { label: string; url: string }
  routeButton: { label: string; url: string }
  address: string
  workSchedule: WorkSchedule
}

interface Page {
  layout: Array<ContactsBlock | { blockType: 'otherBlockType' }>
}
export async function generateMetadata({ params }: Props) {
  const { lang } = await params
  const page = await queryPageBySlug({ lang, slug: 'contacts' })
  return {
    title: page.title,
    description: page.description,
  }
}

export default async function Contacts({ params }: Readonly<Props>) {
  const { lang } = await params
  const dict: DictionariesType = await getDictionary(lang)
  const page = await queryPageBySlug({ lang, slug: 'contacts' })

  // Ensure the layout block is of type ContactsBlock
  const { phone, routeButton, address, workSchedule } = page.layout[0] as ContactsBlock

  // Convert workSchedule into an array of objects with day and time keys
  const workScheduleArray = Object.entries(workSchedule.workTime).map(([day, time]) => ({
    day,
    time,
  }))
  return (
    <div className="flex flex-col">
      <PhoneNumber text={phone.label} phone={phone.url} />
      <div className="md:w-1/2 max-w-[25rem] w-full mb-12 flex flex-col">
        <h1 className="text-4xl mb-4">{workSchedule.title}</h1>
        {workScheduleArray.map(({ day, time }, index) => (
          <div key={index} className="flex place-content-between">
            <span>{dict.contacts.schedule[day]}</span>
            <span>{time}</span>
          </div>
        ))}
      </div>
      <p className="pb-12">{address}</p>
      <Map />
      <RouteButton text={routeButton.label} url={routeButton.url} />
    </div>
  )
}
