set langmenu=en_US.UTF-8
" language English_United States
" vint: -ProhibitSetNoCompatible
set nocompatible
" vint: +ProhibitSetNoCompatible

execute pathogen#infect()

if has('autocmd')
    filetype plugin indent on
endif

let mapleader = ','

set number
set relativenumber

set hidden
set tabstop=4
set shiftwidth=4
set expandtab

set hlsearch
set incsearch

set history=5000
set showcmd
set nojoinspaces
set foldlevelstart=99
set noswapfile
if has('mouse')
  set mouse=nv
endif

colorscheme rdark

" Syntastic configurations
" set statusline+=%#warningmsg#
" set statusline+=%{SyntasticStatuslineFlag()}
" set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0

let g:syntastic_vim_checkers = ['vint']
