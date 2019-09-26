FactoryBot.define do
  factory :project do
    name { Faker::Games::LeagueOfLegends.champion }
    description { Faker::Games::LeagueOfLegends.quote }
    content { "MyString" }
    category { Faker::Games::LeagueOfLegends.rank }
    company { nil }
  end
end
