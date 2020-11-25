using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banco = new DataBase();

            string isRunning = Request["c"].ToString();
            if (isRunning == "false")
            {
                string Name = Request["n"];
                if (Name == "" || Name == null)
                {
                    return;

                }
                string Email = Request["e"];
                if (Email == "" || Email == null)
                {
                    return;

                }

                string Password = Request["p"];
                if (Password == "" || Password == null)
                {
                    return;

                }
                string Condominio = Request["co"];
                if (Condominio == "" || Condominio == null)
                {
                    return;

                }
                string Apartamento = Request["a"];
                if (Apartamento == "" || Apartamento == null)
                {
                    return;

                }
                string Funccao = Request["f"];
                if (Funccao == "" || Funccao == null)
                {
                    return;

                }

                Banco.openBar("localhost", "root", "root", "HomeA");
                Banco.setCommand("Insert into Usuario values ('" + Email + "', '" + Name + "', '" + Password + "'," + Condominio + "," + Funccao + ", " + Apartamento + ");");
                Banco.Refresh();


            } else {
                string Email = Request["e"];
                if (Email == "" || Email == null)
                {
                    return;

                }

                string Password = Request["p"];
                if (Password == "" || Password == null)
                {
                    return;

                }

                Banco.openBar("localhost", "root", "root", "HomeA");
                Banco.getCommand("SELECT * FROM Usuario");
                string Valve;
                while (Banco.Selected.Read())
                {
                    Valve = Banco.Selected["cd_condominio"].ToString() + "&" + Banco.Selected["cd_apartemanto"].ToString();
                    if (Banco.Selected["nm_email_usuario"].ToString() == Email && Banco.Selected["nm_senha_usuario"].ToString() == Password && Banco.Selected["cd_tipo_usuario"].ToString() == "0")
                    {
                        Response.Write("0" + Valve);

                    }
                    if (Banco.Selected["nm_email_usuario"].ToString() == Email && Banco.Selected["nm_senha_usuario"].ToString() == Password && Banco.Selected["cd_tipo_usuario"].ToString() == "1")
                    {
                        Response.Write("1" + Valve);

                    }
                    if (Banco.Selected["nm_email_usuario"].ToString() == Email && Banco.Selected["nm_senha_usuario"].ToString() == Password && Banco.Selected["cd_tipo_usuario"].ToString() == "2")
                    {
                        Response.Write("2" + Valve);

                    }
                    if (Banco.Selected["nm_email_usuario"].ToString() == Email && Banco.Selected["nm_senha_usuario"].ToString() == Password && Banco.Selected["cd_tipo_usuario"].ToString() == "3")
                    {
                        Response.Write("3" + Valve);

                    }

                }

            }

        }
    }
}