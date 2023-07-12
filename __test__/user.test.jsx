import React from 'react';

import { act, render, screen } from '@testing-library/react';

const TestComponent = ({ products = [] }) => {
  const [user, setUser] = React.useState('Azat');

  const changeUser = () => {
    act(() => {
      setUser('Burcu');
    });
  };

  React.useEffect(() => {
    setTimeout(() => {
      setUser('Miran Ali');
    }, 300); // 300ms sonra user degisir
  }, []);
  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <p>{user}</p>
      <button onClick={changeUser}>change name</button>
    </div>
  );
};

describe('TestComponent', () => {
  it('renders a list of items', () => {
    const products = ['nextjs', 'jest', 'typescript'];
    render(<TestComponent products={products} />);
    const listItemsElements = screen.getAllByRole('listitem');
    listItemsElements.forEach((element, index) => {
      expect(element).toHaveTextContent(products[index]);
    });
  });

  it('renders list items length', () => {
    const products = ['nextjs', 'jest', 'typescript'];
    render(<TestComponent products={products} />);
    const listItemsElements = screen.getAllByRole('listitem');
    expect(listItemsElements).toHaveLength(products.length);
  });

  it('renders user change after 300ms', async () => {
    render(<TestComponent />);
    const userElement = await screen.findByText('Miran Ali', {
      exact: false,
    });
    expect(userElement).toBeInTheDocument();
  });

  describe('when button clicked', () => {
    it('changes user name to Burcu', () => {
      render(<TestComponent />);
      const buttonElement = screen.getByRole('button', {
        name: /change name/i,
      });
      buttonElement.click();
      const userElement = screen.getByText('Burcu');
      expect(userElement).toBeInTheDocument();
    });
  });
});

// getBy... hata fırlatır
// queryBy... null döner ve bu sayede domda olmayan bir şeyi test edebiliriz
// findBy... async fonksiyonlar için kullanılır. Ornegin api isteği sonucu gelen verileri test etmek için kullanılır. Yada bir süre sonra domda oluşacak bir elementin degisikligini test etmek için kullanılır.
