import Card from './components/Card';
import Header from './components/Header';
import Search from './components/Search';
import { useSearch } from './hooks/useSearch';

function App() {
  const { keyword, handleSearchChange, filteredMembers, handleSearch } =
    useSearch();

  return (
    <>
      <Header />
      <Search
        keyword={keyword}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />

      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredMembers.map((member) => (
          <Card
            key={member.id}
            name={member.name}
            englishName={member.englishName}
            github={member.github}
          />
        ))}
      </section>
    </>
  );
}

export default App;
