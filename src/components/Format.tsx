'use client'

import { getFormatBlob } from '@/services/api'
import { AudioFormat, FullFormat, Video, VideoFormat } from '@/types'
import save from '@/utils/save'
import { FiDownload } from 'react-icons/fi'

type Props = {
  video: Video
  format: VideoFormat | AudioFormat | FullFormat
  fields: {
    first: string | React.ReactNode
    second: string | React.ReactNode
  }
}

export default function Format({ fields, format, video }: Props) {
  const { first, second } = fields

  async function saveThisFile() {
    const blob = await getFormatBlob(format, video.url)

    if (blob) {
      const type =
        format.hasAudio && format.hasVideo
          ? `${format.qualityLabel}`
          : format.hasAudio && !format.hasVideo
          ? 'AUDIO'
          : 'VIDEO'
      await save(blob, `[${type}] ${video.title}`)
    }
  }

  return (
    <div className='w-full h-[70px] border-[1px] border-neutral-900 rounded-md flex items-center p-3 justify-around text-neutral-400'>
      <div>{first}</div>
      <div className='w-[1px] h-[50%] bg-neutral-800'></div>
      <div>{second}</div>
      <div className='w-[1px] h-[50%] bg-neutral-800'></div>
      <button
        className='focus:text-emerald-400 transition-all'
        onClick={() => saveThisFile()}
      >
        <i>
          <FiDownload />
        </i>
      </button>
    </div>
  )
}