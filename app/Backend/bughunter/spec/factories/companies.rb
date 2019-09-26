FactoryBot.define do
  factory :company do
    name { Faker::Company.name }
    description { Faker::Movies::VForVendetta.quote }
    cnpj { Faker::Number.number(12) }
    email { Faker::Internet.email }
    telefone { Faker::Number.number(9) }
  end
end
