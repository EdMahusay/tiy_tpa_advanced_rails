json.array!(@books) do |book|
  json.extract! book, :id, :title, :pages, :approved
  json.url book_url(book, format: :json)
end
