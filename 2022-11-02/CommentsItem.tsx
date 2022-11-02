import { format } from 'path'
import React from 'react'

import React from 'react'
import CustomEditor from './Editor'

export default function CommentsItem({ item }: { item: CommentItemType}) {
  return (
    <Wrapper>
      <div>
      <div>
        <div>
          <div>
          {Array.from({length: 5}.map(_, idx) => (
            <IconStar key={idx} fill={idx < item.rate ? 'red' : 'none'}
            stroke={idx < item.rate ? 0 : 1}
            />
          ))}
        </div>
        <span className='text-zinc-300 text-xs'>
          {item.price.toLocaleString('ko-kr')} 원 * {item.quantity} 개 = {' '}
          {item.amount.toLocaleString('ko-kr')} 원
        </span>
      </div>
      <p>{format(new Date(item.updatedAt), 'yyyy년 M월 d일')}</p>
      </div>
      <CustomEditor editorState={} readOnly />
      </div>
    </Wrapper>
  )
}
