@entries.each do |entry|
  json.set! entry.id do
    json.partial! 'entry', entry: entry
  end
end
