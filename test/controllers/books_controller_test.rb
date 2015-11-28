require 'test_helper'

class BooksControllerTest < ActionController::TestCase
  setup do
    @book = books(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create book" do
    assert_difference('Book.count') do
      post :create, params: { book: { approved: @book.approved, pages: @book.pages, title: @book.title } }
    end

    assert_redirected_to book_path(Book.last)
  end

  test "should show book" do
    get :show, params: { id: @book }
    assert_response :success
  end

  test "should get edit" do
    get :edit, params: { id: @book }
    assert_response :success
  end

  test "should update book" do
    patch :update, params: { id: @book, book: { approved: @book.approved, pages: @book.pages, title: @book.title } }
    assert_redirected_to book_path(@book)
  end

  test "should destroy book" do
    assert_difference('Book.count', -1) do
      delete :destroy, params: { id: @book }
    end

    assert_redirected_to books_path
  end
end
