// Native
import Head from 'next/head'
import React from 'react'

// Packages
import moment from 'moment'

// Components
import Link from '../components/link'
import {UL, LI} from '../components/list'

// Data
import posts from '../data/posts'

const parseDate = date => moment(date, 'DD-MM-YYYY')
const nativeDate = date => parseDate(date).toDate()

export default class Meta extends React.Component {
  render() {
    for (const post of posts) {
      const year = parseDate(post.date).year()
      post.url = `/${year}/${post.id}`
    }

    posts.sort((a, b) => {
      return nativeDate(b.date) - nativeDate(a.date)
    })

    return (
      <div>
        <Head>
          <title>Leo Lamprecht</title>
        </Head>

        <div>Heyho!</div>

        <UL>
          {
            posts.map(post => (
              <LI key={post.id}>
                <Link href={post.url}>{post.title}</Link>
              </LI>
            ))
          }
        </UL>
      </div>
    )
  }
}
