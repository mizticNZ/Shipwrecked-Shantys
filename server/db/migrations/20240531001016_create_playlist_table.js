/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('playlist', (table) => {
    table.increments('id').references('jedis')
    table.string('name')
    table.string('artist')
    table.string('duration')
    table.string('source')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('playlist')
}
