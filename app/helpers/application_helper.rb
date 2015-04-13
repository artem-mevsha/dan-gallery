module ApplicationHelper
  # Returns the full title on a per-page basis
  def full_title(page_title)
    if page_title.empty?
      "Dan Boyarchuk's gallery"
    else
      page_title
    end
  end

  def meta_description(page_description)
    if page_description.empty?
      "Dan Boyarchuk's gallery"
    else
      page_description
    end
  end
end
