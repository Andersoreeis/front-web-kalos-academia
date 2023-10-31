import React, { Component } from 'react';
import './Workoutspage.css';
import { Helmet } from 'react-helmet';
import ButtonDefaultKalos from '../../components/Button/ButtonDefaultKalos';
import SelectDefaultKalos from '../../components/Select/Select';
import { Input } from 'antd';
import calendar from './images/Calendar.png';
import workoutPhoto from './images/workoutgymTraine.jpeg';
import { Link } from 'react-router-dom';
import CrudWokoutCard from './componentsWorkoutPage/CrudWorkoutsCard';
import { loadAllWorkouts } from './Api/ApiWorkoutatagym';
import { loadRegistererStudents } from './Api/ApiShowRegistered';
import { SearchWorkout } from './Api/ApiSearchWorkout';

class Workoutspage extends Component {
  state = {
    informacoes: [],
    alunosMatriculados: [],
    selectedCard: null,
    searchInput: '', // Store the search input value
  };

  toggleCardVisibility = (index) => {
    this.setState((prevState) => ({
      selectedCard: prevState.selectedCard === index ? null : index,
    }));
  };

  componentDidMount() {
    loadAllWorkouts()
      .then((data) => {
        const informacoesApi = data.informacoes;
        this.setState({ informacoes: informacoesApi });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
      });

    loadRegistererStudents()
      .then((data) => {
        const alunosMatriculadosApi = data.informacoes;
        console.log(alunosMatriculadosApi);

        this.setState({ alunosMatriculados: alunosMatriculadosApi });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
      });

      SearchWorkout(value)
      .then((data) => {
        const filteredWorkouts = this.state.informacoes.filter((workout) => {
          return workout.nome.toLowerCase().includes(value.toLowerCase());

        this.setState({ informacoes: filteredWorkouts, searchInput: value });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao carregar os dados:', error);
      });



  }

  

  // handleSearch = (value) => {
  //   // Implement the search logic here based on your criteria
  //   const filteredWorkouts = this.state.informacoes.filter((workout) => {
  //     return workout.nome.toLowerCase().includes(value.toLowerCase());
  //   });

    this.setState({ informacoes: filteredWorkouts, searchInput: value });
  };

  render() {
    const optionsCategoria = [
      { value: 'Boxe', label: 'Boxe' },
      { value: 'Natação', label: 'Natação' },
      { value: 'Cardio', label: 'Cardio' },
      { value: 'Crossfit', label: 'Crossfit' },
    ];

    const { informacoes, alunosMatriculados, selectedCard, searchInput } = this.state;

    return (
      <div className='workouts_page'>
        <div className='page-default'>
          <Helmet>
            <title>Kalos - Treinos</title>
          </Helmet>
          <div className='container-header-galeria-exercicios'>
            <p>{"Treinos"}</p>
            <div className='selects-exercises'>
              <div className='selects'>
                <SelectDefaultKalos
                  defaultValue="Filtrar Categoria"
                  options={optionsCategoria}
                  className="selectDefault"
                  width={"200px"}
                  height={"40px"}
                />
              </div>
              <div className='search'>
                <Input.Search
                  className='search_header-workout search_header'
                  placeholder="Buscar treinos..."
                  onSearch={this.handleSearch} // Use the handleSearch function
                  value={searchInput} // Bind the input value to searchInput
                  size='large'
                />
<<<<<<< HEAD
              </Link>
            </div>
          </div>
        </div>
    
        <div className='container-galery-workouts'>
          {informacoes.map((workout, index) => (
            <div className="card-workouts" key={index}>  

              <div className={`change-card ${selectedCard === index ? 'visible' : ''}`} onClick={() => this.toggleCardVisibility(index)}>
                {/* ... */}
                {selectedCard === index && (
                  <CrudWokoutCard className="container-crud-workouts" />
                )}
              </div>
              {workout.foto !== "a" ? (
                <img className='img-card-workouts' src={workout.foto} alt={workout.nome} />
              ) : (
                <img className='img-card-workouts' src={workoutPhoto} alt="Imagem Padrão" />
              )}
              <div className='workout-name'>{workout.nome}</div>
              <div className='workout-category-name'>{workout.nome_categoria_treino}</div>
              <div className='container-data-user'>
                <div className='workout-data'>
                  <img className="img-calendar-workout" src={calendar} alt="" />
                  <p className='p-workout-data'>
                    {workout.data_criacao}
                  </p>
                </div>
                
                <div className='user-workouts'>
                  {alunosMatriculados.map((matriculados, matriculadoIndex) => (
                    <img key={matriculadoIndex} src={matriculados.foto} alt="" />
                  ))}
                  
                </div>
              </div>
            </div>
          ))}
          
=======
              </div>
              <div className='buttonsExercise'>
                <Link to='/menu/treinos'>
                  <ButtonDefaultKalos
                    textButton="TREINOS"
                    width="150px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link>
                <Link to='/menu/criarTreinos'>
                  <ButtonDefaultKalos
                    textButton="CRIAR NOVO TREINO"
                    width="200px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link>
                <Link to='/menu/galeria_exercicios'>
                  <ButtonDefaultKalos
                    textButton="GALERIA DOS EXERCÍCIOS"
                    width="200px"
                    height="40px"
                    primaryColor="rgb(245, 247, 249)"
                    secondaryColor="rgb(0, 254, 144, 1)"
                    className="buttonDefault"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className='container-galery-workouts'>
            {informacoes.map((workout, index) => {
              localStorage.setItem("id_treino_categoria", workout.id)
              return (
                <div className="card-workouts" key={index}>
                  <div
                    className={`change-card ${selectedCard === index ? 'visible' : ''}`}
                    onClick={() => this.toggleCardVisibility(index)}
                  >
                    {/* ... */}
                    {selectedCard === index && (
                      <CrudWokoutCard className="container-crud-workouts" />
                    )}
                  </div>
                  {workout.foto !== "a" ? (
                    <img className='img-card-workouts' src={workout.foto} alt={workout.nome} />
                  ) : (
                    <img className='img-card-workouts' src={workoutPhoto} alt="Imagem Padrão" />
                  )}
                  <div className='workout-name'>{workout.nome}</div>
                  <div className='workout-category-name'>{workout.nome_categoria_treino}</div>
                  <div className='container-data-user'>
                    <div className='workout-data'>
                      <img className="img-calendar-workout" src={calendar} alt="" />
                      <p className='p-workout-data'>{workout.data_criacao}</p>
                    </div>
                    <div className='user-workouts'>
                    {alunosMatriculados.slice(0, 5).map((matriculados, matriculadoIndex) => (
  <img key={matriculadoIndex} src={matriculados.foto} className='userCard' alt="" />
))}
<p className='userCard'>{alunosMatriculados.length}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
>>>>>>> main
        </div>
      </div>
    );
  }
}

export default Workoutspage;
