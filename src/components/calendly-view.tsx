'use client'
// import Script from 'next/script'
import { InlineWidget } from 'react-calendly'

export function CalendlyView() {
  return (
    <>
      {/* <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/pontes014/30min?hide_event_type_details=1&hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
      ></Script> */}
      <InlineWidget
        styles={{
          width: '100%',
          background: 'hsl(var(--background))',
          maxWidth: 1000,
          height: '800px',
        }}
        pageSettings={{
          backgroundColor: 'hsl(var(--background))',
          hideEventTypeDetails: false,
          hideLandingPageDetails: true,
          primaryColor: 'hsl(var(--foreground))',
          textColor: 'rgb(226 232 240 / var(--tw-text-opacity))',
        }}
        url="https://calendly.com/pontes014/30min"
        prefill={{
          email: 'pontes014@gmail.com',
          firstName: 'Roni',
          lastName: 'Lucas',
          name: 'Roni Lucas',
          smsReminderNumber: '+5511994745755',
        }}
      />
    </>
  )
}
