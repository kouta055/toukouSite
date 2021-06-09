# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

no1 = User.create!(email: 'sample1@email.com', password: '1234567')
no2 = User.create!(email: 'sample2@email.com', password: '1234568')

5.times do
  no1.articles.create!(
    title: Faker::Lorem.sentence(word_count: 5),
    content: Faker::Lorem.sentence(word_count: 100)
  )
end

5.times do
  no2.articles.create!(
    title: Faker::Lorem.sentence(word_count: 5),
    content: Faker::Lorem.sentence(word_count: 100)
  )
end
