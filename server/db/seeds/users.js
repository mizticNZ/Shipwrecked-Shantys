export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, name: 'joe' },
    { id: 2, name: 'isaac' },
    { id: 3, name: 'luke' },
    { id: 4, name: 'jack' },
    { id: 5, name: 'mitchell' },
  ])
}
