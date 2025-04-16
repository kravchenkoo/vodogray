import { CallButton } from '@/components/CallButton'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Page } from '@/payload-types'
import Table from '@/components/Table'

type HomeBlock = Extract<Page['layout'][number], { blockType: 'home' }>

function MainPage({ block }: { block: HomeBlock }) {
  const { callUsButton, tableDiscount, tableRegular, rules } = block
  return (
    <div className="flex flex-col gap-16">
      {callUsButton && <CallButton text={callUsButton.label} phone={callUsButton.url} />}
      {tableDiscount && <Table type="tableDiscount" table={tableDiscount} />}
      {tableRegular && <Table type="tableRegular" table={tableRegular} />}
      {rules && <RichText className="gap-12 rulesText flex flex-col" data={rules} />}
    </div>
  )
}

export default MainPage
