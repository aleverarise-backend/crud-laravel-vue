new Vue({
	el: "#crud",
	created: function(){
		this.getKeeps();
	},
	data: {
		keeps: [],
		newKeep: '',
		pagination: {
			'total': 0,
            'current_page': 0,
            'per_page': 0,
            'last_page': 0,
            'from': 0,
            'to': 0,
		},
		errors: [],
		fillKeep: {'id' : '', 'keep' : ''},
		offset: 5,
	},
	computed: {
		isActived: function (){
			return this.pagination.current_page;
		},
		pagesNumber: function (){
			if(!this.pagination.to){
				return [];
			}

			var from = this.pagination.current_page - this.offset;
			if(from < 1){
				from = 1;
			}

			var to = from + (this.offset * 2); 

			if(to >= this.pagination.last_page){
				to = this.pagination.last_page;
			}

			var pageArray = [];
			while(from <= to){
				pageArray.push(from);
				from++;
			}

			return pageArray;
		}
	},
	methods: {
		getKeeps: function(page){
			var urlKeeps = 'task?page='+page;
			axios.get(urlKeeps)
				.then(response => {
					this.keeps = response.data.tasks.data;
					this.pagination = response.data.pagination;
				});
		},
		editKeep: function(keep){
			this.fillKeep.id = keep.id;
			this.fillKeep.keep = keep.keep;
			$('#edit').modal('show');
		},
		updateKeep: function(id){
			var url = 'task/' + id;
			axios.put(url, this.fillKeep)
				.then(response => {
					this.getKeeps();
					this.fillKeep = {'id' : '', 'keep' : ''},
					this.errors = [],
					$('#edit').modal('hide');
					toastr.success('Tarea Actualizada con exito');
				})
				.catch(error => {
					this.errors = error.response.data;
				});
		},
		deleteKeeps: function(keep){
			var url = 'task/' + keep.id;
			axios.delete(url)
				.then(reponse => {
					this.getKeeps();
					toastr.success('Eliminado Correctamente');
				});
		},
		createKeep: function(){
			var url = 'task';
			axios.post(url, {
				keep: this.newKeep
			})
				.then(response => {
					this.getKeeps();
					this.newKeep = '';
					this.errors = [];
					$('#create').modal('hide');
					toastr.success('Tarea Agregada Correctamente');
				})
				.catch(error => {
					// this.errors = error.response.data;
					this.errors = error.response.data.errors.keep;
				});
		},
		changePage: function(page){
			this.pagination.current_page = page;
			this.getKeeps(page);
		},
	}

})