@extends('app')

@section('content')

<div class="row">
	<div class="col-xs-12">
		<h1 class="page-header">
			Crud Laravel y Vue
		</h1>
	</div>
</div>
<div class="row" id="crud">
	<div class="col-md-12">
		<a href="#" class="btn btn-primary pull-right mb-5" data-toggle="modal" data-target="#create"> Nueva Tarea</a>

		<table class="table table-hover table-striped">
			<thead>
				<tr>
					<th>ID</th>
					<th>Task</th>
					<th colspan="2">&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="keep in keeps">
					<td width="10px">@{{ keep.id }}</td>
					<td>@{{ keep.keep }}</td>
					<td width="10px">
						<a href="#" class="btn btn-warning btn-small" v-on:click.prevent="editKeep(keep)">Editar</a>
					</td>
					<td width="10px">
						<a href="#" class="btn btn-danger btn-small" v-on:click.prevent="deleteKeeps(keep)">Eliminar</a>
					</td>
				</tr>
			</tbody>
		</table>
		<nav aria-label="Page navigation example">
		  	<ul class="pagination">
			    <li class="page-item" v-if="pagination.current_page > 1">
			    	<a class="page-link" href="#" v-on:click.prevent="changePage(pagination.current_page - 1)">Previous</a>
			    </li>

			    <li class="page-item" v-for="page in pagesNumber" v-bind:class="[page == isActived ? 'active' : '']">
			    	<a class="page-link" href="#" v-on:click.prevent="changePage(page)">@{{ page }}</a>
			    </li>
			    
			   
			    <li class="page-item" v-if="pagination.current_page < pagination.last_page">
			    	<a class="page-link" href="#" v-on:click.prevent="changePage(pagination.current_page + 1)">Next</a>
			    </li>
		  	</ul>
		</nav>
		@include('create')
		@include('edit')
	</div>

	{{-- <div class="col-md-4">
		<pre>
			@{{ $data }}
		</pre>
	</div> --}}

</div>



@endsection