import React, { useEffect, useState } from 'react'
import SearchResults from '../SearchResults'
import Title from '../Title'
import { StyledSearch, StyledSearchResults } from './styled'
import { useSelector } from 'react-redux'

interface IPost {
  id: number,
  image: string,
  text: string,
  date: string,
  title: string,
}

const Search = () => {
    const [search, setSearch] = useState('')
    const posts = useSelector((state: any) => state.posts)

  return (
    <>
      <StyledSearch>
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </StyledSearch>
      <Title text={`Search results '${search}'`} />
      <StyledSearchResults>
        {search.length > 1 && 
          posts.filter(({title}: {title: string}) => 
            title.toLowerCase().includes(search))
              .map(({ id, image, text, date, title }: IPost) => (
          <SearchResults
            key={id}
            id={id}
            image={image}
            title={title}
            text={text}
            date={date}
          />
        ))}
      </StyledSearchResults>
    </>
  );
}

export default Search
