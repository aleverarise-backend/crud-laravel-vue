
<form method="POST" v-on:submit.prevent="updateKeep(fillKeep.id)">
	<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  	<div class="modal-dialog" role="document">
		    <div class="modal-content">
		      	<div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          	<span aria-hidden="true">&times;</span>
			        </button>
		      	</div>
			    <div class="modal-body">
			    	<label for="keep">Actualizar Tarea</label>
			    	<input type="text" name="keep" id="keep" class="form-control" v-model="fillKeep.keep">
			    	<span v-for="error in errors" class="text-danger">@{{ error }}</span>
			    </div>
		      	<div class="modal-footer">
		        	<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
		        	<button type="submit" class="btn btn-primary">Actualizar</button>
		      	</div>
		    </div>
	  	</div>
	</div>
</form>