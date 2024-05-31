/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('playlist').del()
  await knex('playlist').insert([
    {
      id: 1,
      name: 'Hans solo, solo',
      artist: 'Hans Solo',
      duration: '5:53',
      source: 'https://www.youtube.com/watch?v=lg_FoEy8T_A',
    },
  ])
}
