// surekli tekrar eden islemler icin kullanilir.
import { render, screen } from '@testing-library/react';

class DatabaseClient {
  constructor() {
    this.users = [];
  }

  initialize() {
    this.users = [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ];
  }

  getUsers() {
    return this.users;
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  reset() {
    this.users = [];
  }
}

describe('DatabaseClient', () => {
  it('should initialize with two users', () => {
    const dbClient = new DatabaseClient();
    dbClient.initialize();

    const users = dbClient.getUsers();

    expect(users).toHaveLength(2);
    expect(users).toMatchObject([
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ]);
  });

  it('should delete a user', () => {
    const dbClient = new DatabaseClient();
    dbClient.initialize();

    dbClient.deleteUser(1);

    const users = dbClient.getUsers();

    expect(users).toHaveLength(1);
    expect(users).toMatchObject([
      {
        id: 2,
        name: 'Jane Doe',
      },
    ]);
  });

  it('should get a user', () => {});
});
